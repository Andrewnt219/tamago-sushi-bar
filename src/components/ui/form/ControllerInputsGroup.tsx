import React from 'react';
import styled from 'styled-components/macro';
import { ControllerInput } from './ControllerInput';
import { FieldElement } from 'react-hook-form';

/**
 * @description the object model to put in ControllerInputsGroup
 * @param id the id of each input
 * @param value the value of each input
 * @param register returned value of register from react-hook-form/useForm()
 * @param label the label of each input
 */
export interface ControllerObject<FormValues, OptionValue extends string> {
  id: string;
  checked?: boolean;
  value: OptionValue;
  register: (ref: FieldElement<FormValues> | null) => void;
  label: string;
}

interface ControllerInputsGroupProps<FormValues, OptionValue extends string> {
  name: keyof FormValues;
  handleChange?:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | undefined;
  controllers: ControllerObject<FormValues, OptionValue>[];
  type: 'radio' | 'checkbox';
}

/**
 * @description Group of radios or checkboxes (ControllerInput)
 * @template FormValues the interface of all the inputs' value of the form this group is in
 * @param controllers an array of ControllerObject<FormValues>
 * @param name the name of the group, and each radio/checkbox
 * @param type the type of the inputs
 * @param handleChange handle when user changes the value of input controllers
 */
function ControllerInputsGroup<FormValues, OptionValue extends string>({
  name,
  controllers,
  type,
  handleChange,
}: ControllerInputsGroupProps<FormValues, OptionValue> &
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>) {
  return (
    <Container>
      <Legend>{name}</Legend>
      <Controllers>
        {controllers.map((controllerProps, index) => (
          <ControllerInput
            {...controllerProps}
            value={controllerProps.value}
            onChange={handleChange}
            key={index}
            name={name}
            type={type}
          />
        ))}
      </Controllers>
    </Container>
  );
}

export { ControllerInputsGroup };

interface ContainerProps {}
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  border: none;
`;

interface LegendProps {}
const Legend = styled.p<LegendProps>`
  margin-bottom: 1rem;
  font-size: inherit;
`;

interface ControllersProps {}
const Controllers = styled.ul<ControllersProps>`
  display: flex;

  & > :not(:last-child) {
    margin-right: 1rem;
  }
`;
