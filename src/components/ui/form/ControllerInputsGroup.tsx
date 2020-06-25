import React from 'react';
import styled from 'styled-components/macro';
import { ControllerInput } from './ControllerInput';
import { FormContextValues, FieldElement } from 'react-hook-form';

export interface ControllerObject<FormValues> {
  id: string;
  checked?: boolean;
  value: string;
  register: (ref: FieldElement<FormValues> | null) => void;
  label: string;
}

interface ControllerInputsGroupProps<FormValues> {
  name: keyof FormValues;
  handleChange?:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | undefined;
  controllers: ControllerObject<FormValues>[];
  errors: FormContextValues['errors'];
  type: 'radio' | 'checkbox';
}

/**
 * @description Group of radios or checkboxes (ControllerInput)
 * @template FormValues the interface of all the inputs' value of the form this group is in
 * @param controllers an array of ControllerObject<FormValues>
 * @param name the name of the group, and each radio/checkbox
 * @param errors the errors object from react-hook-form/useForm()
 * @param type the type of the inputs
 * @param handleChange handle when user changes the value of input controllers
 */
function ControllerInputsGroup<FormValues>({
  name,
  controllers,
  errors,
  type,
  handleChange,
}: ControllerInputsGroupProps<FormValues> &
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>) {
  return (
    <Container>
      <Legend>{name}</Legend>
      {controllers.map((controllerInputProps, index) => (
        <ControllerInput
          {...controllerInputProps}
          onChange={handleChange}
          key={index}
          name={name}
          errors={errors}
          type={type}
        />
      ))}
    </Container>
  );
}

export { ControllerInputsGroup };

interface ContainerProps {}
const Container = styled.fieldset<ContainerProps>``;

interface LegendProps {}
const Legend = styled.legend<LegendProps>``;
