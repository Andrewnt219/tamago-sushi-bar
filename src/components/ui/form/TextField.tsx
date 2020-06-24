/* -------------------------------- TextField ------------------------------- */

import React from 'react';
import { FieldElement } from 'react-hook-form';
import ErrorText, { ErrorTextProps } from './ErrorText';

export interface TextFieldProps<FormValues>
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ErrorTextProps {
  register: (ref: FieldElement<FormValues> | null) => void;
  id: string;
  label: string;
  name: string;
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
  errors,
  name,
  label,
  id,
  type = 'text',
  ...htmlInputProps
}: TextFieldProps<FormValues>) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={id}
        className="input__content"
        ref={register}
        {...htmlInputProps}
      />

      <ErrorText errors={errors} name={name} />
    </div>
  );
}
