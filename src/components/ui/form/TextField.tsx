/* -------------------------------- TextField ------------------------------- */

import React from 'react';
import { FieldElement } from 'react-hook-form';
import ErrorText, { ErrorTextProps } from './ErrorText';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components/macro';

export interface TextFieldProps<FormValues> {
  register: (ref: FieldElement | null) => void;
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
  disabled,
  required,
  ...htmlInputProps
}: TextFieldProps<FormValues> &
  React.InputHTMLAttributes<HTMLInputElement> &
  ErrorTextProps) {
  const hasError = Boolean(errors[name]);

  const switchPrimaryColor = (theme: DefaultTheme): DefaultTheme => {
    if (hasError) {
      return { ...theme, primary: theme.error, black: theme.error };
    }

    if (disabled) {
      return { ...theme, primary: '#ccc', black: '#ccc' };
    }

    return theme;
  };

  return (
    <ThemeProvider theme={switchPrimaryColor}>
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
            disabled={disabled}
          />
          <Label required={required} htmlFor={id}>
            {label}
          </Label>
          <BottomBar />
        </InputWrapper>
        <ErrorText errors={errors} name={name} />
      </Container>
    </ThemeProvider>
  );
}
const Container = styled.div`
  font-size: 1rem;
`;

interface InputWrapperProps {}
const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  overflow: hidden;

  border: none;
  width: 100%;
  margin-bottom: 1rem;

  :hover label {
    color: ${(p) => p.theme.primary};
  }
`;

type InputProps = {};
const Input = styled.input.attrs({ marginTop: '2rem', borderBottom: '' })<
  InputProps
>`
  appearance: none;
  display: block;
  font-size: inherit;

  width: 100%;
  margin-top: ${(p) => p.marginTop};
  padding-bottom: 1rem;
  outline: none;
  background: transparent;
  /* Same with BottomBar */
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${(p) => p.theme.black};

  cursor: ${(p) => p.disabled && 'not-allowed'};

  &:placeholder-shown + label {
    /* Y equals to input margin-top */
    transform: translateY(${(p) => p.marginTop});
  }

  &:focus {
    + label {
      color: ${(p) => p.theme.primary};
      transform: translateY(0) scale(0.9);
    }

    ~ div {
      width: 100%;
    }
  }
`;

type LabelProps = {
  required?: boolean;
};
const Label = styled.label<LabelProps>`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  color: ${(p) => p.theme.black};

  transform-origin: top left;
  transform: translateY(0) scale(0.9);
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);

  ::after {
    content: "${(p) => p.required && ' *'}";
  }
`;

type BottomBarProps = {};
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
  border-bottom: 2px solid ${(p) => p.theme.primary};
  transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
  width: 0.1px;
`;
