import React from 'react';
import styled from 'styled-components/macro';
import { ErrorTextProps } from './ErrorText';
import { FieldElement } from 'react-hook-form';

interface ControllerInputProps<FormValues> {
  type: 'radio' | 'checkbox';
  register: (ref: FieldElement<FormValues> | null) => void;
  id: string;
  label: string;
  name: string;
}

/**
 * @description render a `radio` or `checkbox` input
 * @param id the id of the element
 * @param name the name of the element
 * @param label the text for the element's label
 * @param register the register from react-hook-form/useForm()
 * @param type type of the input
 * @param htmlRadioAttrs others are html input interface
 */
function ControllerInput<FormValues>({
  onChange,
  id,
  label,
  name,
  register,
  type,
  ...htmlRadioAttrs
}: ControllerInputProps<FormValues> &
  React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Container>
      <Input
        {...htmlRadioAttrs}
        ref={register}
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        hidden
      />

      <Label htmlFor={id}>
        <InputButton className="input-button" type={type} />
        {label}
      </Label>
    </Container>
  );
}

export { ControllerInput };

interface ContainerProps {}
const Container = styled.div<ContainerProps>``;

interface InputProps {}
const Input = styled.input<InputProps>`
  :checked + label .input-button::before {
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);
  }
`;

interface InputButtonProps {
  type: 'checkbox' | 'radio';
}
const InputButton = styled.span<InputButtonProps>`
  display: inline-block;
  margin-right: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: ${(p) => p.type === 'radio' && '50%'};
  border: 3px solid ${(p) => p.theme.lightBlue};

  position: relative;

  ::before {
    content: '';
    visibility: hidden;
    display: block;

    width: 80%;
    padding-top: 80%;
    background: ${(p) => p.theme.lightBlue};
    border-radius: ${(p) => p.type === 'radio' && '50%'};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 200ms ease;
  }
`;

interface LabelProps {}
const Label = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
