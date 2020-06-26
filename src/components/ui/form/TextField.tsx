/* -------------------------------- TextField ------------------------------- */

import React, { useState } from 'react';
import { FieldElement } from 'react-hook-form';
import ErrorText, { ErrorTextProps } from './ErrorText';
import styled from 'styled-components/macro';
import { lighten, darken } from '@material-ui/core';

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
  const hasError = Boolean(errors[name]);

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
          placeholder=" "
          inputIsInvalid={hasError}
        />
        <Label inputIsInvalid={hasError} htmlFor={id}>
          {label}
        </Label>
        <BottomBar inputIsInvalid={hasError} />
      </InputWrapper>
      <ErrorText errors={errors} name={name} />
    </Container>
  );
}
const Container = styled.div`
  font-size: 1rem;

  & > :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  overflow: hidden;

  border: none;
  width: 100%;
`;

type InputProps = {
  inputIsInvalid: boolean;
};
const Input = styled.input.attrs({ marginTop: '1.5rem', borderBottom: '' })<
  InputProps
>`
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
  border-color: ${(p) => (p.inputIsInvalid ? 'red' : 'black')};

  &:placeholder-shown + label {
    /* Y equals to input margin-top */
    transform: translateY(${(p) => p.marginTop});
  }

  &:focus {
    + label {
      color: ${(p) => (p.inputIsInvalid ? p.theme.error : p.theme.lightBlue)};
      transform: translateY(0);
    }

    ~ div {
      width: 100%;
    }
  }

  :hover {
    background: ${darken('#fff', 0.03)};
  }
`;

type LabelProps = {
  inputIsInvalid: boolean;
};
const Label = styled.label<LabelProps>`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  color: ${(p) => (p.inputIsInvalid ? p.theme.error : p.theme.black)};

  transform-origin: top left;
  transform: translateY(0);
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
`;

type BottomBarProps = {
  inputIsInvalid: boolean;
};
const BottomBar = styled.div<BottomBarProps>`
  content: '';
  display: block;
  position: absolute;
  /* To spread out from the center */
  bottom: 0;
  left: 0;
  right: 0;

  margin: 0 auto;
  /* Same with Input's border */
  border-bottom: 2px solid
    ${(p) => (p.inputIsInvalid ? p.theme.error : p.theme.lightBlue)};
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
  width: 0.1px;
`;
