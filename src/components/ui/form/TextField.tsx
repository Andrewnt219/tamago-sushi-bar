/* -------------------------------- TextField ------------------------------- */

import React from 'react';
import { FieldElement } from 'react-hook-form';
import ErrorText, { ErrorTextProps } from './ErrorText';
import styled from 'styled-components/macro';

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
    <Container>
      <InputWrapper>
        <Input
          {...htmlInputProps}
          id={id}
          type={type}
          name={name}
          ref={register}
          onChange={onChange}
          placeholder=""
        />
        <Label htmlFor={id}>{label}</Label>
        <BottomBar />
      </InputWrapper>
      <ErrorText errors={errors} name={name} />
    </Container>
  );
}
const Container = styled.div`
  padding: 0 2rem;
`;
const InputWrapper = styled.fieldset`
  position: relative;
  overflow: hidden;

  border: none;
  width: 100%;
`;

const Input = styled.input.attrs({ marginTop: '1.5rem', borderBottom: '' })`
  appearance: none;
  display: block;
  font-size: inherit;

  width: 100%;
  margin-top: ${(p) => p.marginTop};
  padding-bottom: 1rem;
  outline: none;
  /* Same with BottomBar */
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: black;

  &:placeholder-shown + label {
    /* Y equals to input margin-top */
    transform: translateY(${(p) => p.marginTop});
  }

  &:focus {
    + label {
      color: red;
      transform: translateY(0) scale(0.9);
    }

    ~ div {
      width: 100%;
    }
  }

  :invalid {
  }
`;

const Label = styled.label`
  display: block;
  position: absolute;
  left: 0;
  top: 0;

  transform-origin: top left;
  transform: translateY(0) scale(0.9);
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
`;

const BottomBar = styled.div`
  content: '';
  display: block;
  position: absolute;
  /* To spread out from the center */
  bottom: 0;
  left: 0;
  right: 0;

  margin: 0 auto;
  /* Same with Input's border */
  border-bottom: 2px solid red;
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
  width: 0.1px;
`;
