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

interface ControllerInputsGroupProps<FormValues>
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  name: string;
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
 */
function ControllerInputsGroup<FormValues>({
  name,
  controllers,
  errors,
  type,
}: ControllerInputsGroupProps<FormValues>) {
  return (
    <Container>
      <Legend>{name}</Legend>
      {controllers.map((controllerInputProps, index) => (
        <ControllerInput
          {...controllerInputProps}
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
