import React from 'react';
import styled from 'styled-components/macro';

import { TextField } from '../../../components/ui/form/TextField';
import { BaseForm } from '../../../components/ui/form/BaseForm';
import { useForm } from 'react-hook-form';
import { BaseButton } from '../../../components/ui/BaseButton';
import {
  ControllerObject,
  ControllerInputsGroup,
} from '../../../components/ui/form/ControllerInputsGroup';

interface ReservationFormProps {}
interface ReservationFormValues {
  firstName: string;
  lastName: string;
}
const ReservationForm: React.FC<ReservationFormProps> = () => {
  const { handleSubmit, errors, register } = useForm<ReservationFormValues>();

  const onSubmit = handleSubmit((data, e) => {
    console.log('Submit event', e);
    console.log(data);
  });

  const radios: ControllerObject<ReservationFormValues>[] = [
    {
      id: 'radio1',
      label: 'Radio 1st',
      register: register(),
      value: 'radio1',
    },
    {
      id: 'radio2',
      label: 'Radio 2nd',
      register: register(),
      value: 'radio2',
    },
    {
      id: 'radio3',
      label: 'Radio 3rd',
      register: register(),
      value: 'radio3',
    },
  ];

  const checkboxes: ControllerObject<ReservationFormValues>[] = [
    {
      id: 'checkbox 1',
      label: 'checkbox  1st',
      register: register(),
      value: 'checkbox 1',
    },
    {
      id: 'checkbox 2',
      label: 'checkbox  2nd',
      register: register(),
      value: 'checkbox 2',
    },
    {
      id: 'checkbox 3',
      label: 'checkbox  3rd',
      register: register(),
      value: 'checkbox 3',
    },
  ];

  return (
    <Form onSubmit={onSubmit}>
      <TextField
        id="firstName"
        name="firstName"
        label="first name"
        errors={errors}
        register={register({
          required: 'First name is required',
          minLength: {
            value: 3,
            message: 'At least 1 character',
          },
        })}
      />

      <TextField
        id="lastName"
        name="lastName"
        errors={errors}
        label="last name"
        register={register({
          validate: (data: string) => {
            return data !== '' || 'This is a custom valudation';
          },
        })}
      />

      <TextField
        id="dateTime"
        label="DateTime"
        name="DateTime"
        errors={errors}
        type="time"
        register={register()}
      />

      <ControllerInputsGroup
        type="radio"
        name="radioGroup"
        controllers={radios}
        errors={errors}
      />

      <ControllerInputsGroup
        type="checkbox"
        name="checboxes"
        controllers={checkboxes}
        errors={errors}
      />
      <Button type="submit">SUBMIT</Button>
    </Form>
  );
};

export { ReservationForm };

const Form = styled(BaseForm)`
  .input {
    color: red;
  }
`;

const Button = styled(BaseButton)``;
