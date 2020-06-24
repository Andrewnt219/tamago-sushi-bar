import React from 'react';
import styled from 'styled-components/macro';
import ErrorText, { ErrorTextProps } from './ErrorText';
import { FieldElement } from 'react-hook-form';

interface ControllerInputProps<FormValues>
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ErrorTextProps {
  value: string;
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
 * @param errors the errors from react-hook-form/useForm()
 * @param register the register from react-hook-form/useForm()
 * @param type type of the input
 * @param htmlRadioAttrs others are html input interface
 */
function ControllerInput<FormValues>({
  id,
  label,
  name,
  errors,
  register,
  type,
  ...htmlRadioAttrs
}: ControllerInputProps<FormValues>) {
  return (
    <Container>
      <Label htmlFor={id}>
        <InputButton type={type} />
        {label}
      </Label>

      <input
        ref={register}
        type={type}
        name={name}
        id={id}
        hidden
        {...htmlRadioAttrs}
      />

      <ErrorText errors={errors} name={name} />
    </Container>
  );
}

export { ControllerInput };

interface ContainerProps {}
const Container = styled.div<ContainerProps>``;

interface InputButtonProps {
  type: 'checkbox' | 'radio';
}
const InputButton = styled.span<InputButtonProps>`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  border-radius: ${(p) => p.type === 'radio' && '50%'};
  background-color: ${(p) => p.theme.primary};
`;

interface LabelProps {}
const Label = styled.label<LabelProps>``;
