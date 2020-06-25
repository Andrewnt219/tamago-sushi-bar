/* -------------------------------- TextField ------------------------------- */

import React from 'react';
import { FieldElement } from 'react-hook-form';
import ErrorText, { ErrorTextProps } from './ErrorText';

export interface TextFieldProps<FormValues> {
  register: (ref: FieldElement<FormValues> | null) => void;
  id: string;
  label: string;
  name: keyof FormValues;
  type?:
    | 'text'
    | 'number'
    | 'tel'
    | 'email'
    | 'time'
    | 'week'
    | 'date'
    | 'datetime-local';
}

export function TextField<FormValues>({
  register,
  onChange,
  value,
  errors,
  name,
  label,
  id,
  type = 'text',
  ...htmlInputProps
}: TextFieldProps<FormValues> &
  React.InputHTMLAttributes<HTMLInputElement> &
  ErrorTextProps) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>

      <input
        value={value}
        type={type}
        name={name}
        id={id}
        className="input__content"
        ref={register}
        onChange={onChange}
        {...htmlInputProps}
      />

      <ErrorText errors={errors} name={name} />
    </div>
  );
}
