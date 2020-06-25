import React, { useReducer, useState } from 'react';
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
  date: string;
  radioGroup: string;
  checkboxes: string;
}
const ReservationForm: React.FC<ReservationFormProps> = () => {
  const { handleSubmit, errors, register } = useForm<ReservationFormValues>();
  // const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [formState, setFormState] = useState<ReservationFormValues>({
    firstName: '',
    lastName: '',
    date: '',
    radioGroup: '',
    checkboxes: '',
  });

  const onSubmit = handleSubmit((data, e) => {
    console.log('Submit event', e);
    console.log(data);
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormState(
      (prev) =>
        ({ ...prev, [name]: value } as Pick<
          ReservationFormValues,
          keyof ReservationFormValues
        >)
    );
  };

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
        value={formState?.firstName}
        onChange={handleChange}
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
        value={formState?.lastName}
        onChange={handleChange}
        register={register({
          validate: (data: string) => {
            return data !== '' || 'This is a custom valudation';
          },
        })}
      />

      <ControllerInputsGroup
        type="radio"
        name="radioGroup"
        controllers={radios}
        errors={errors}
        handleChange={handleChange}
      />

      <ControllerInputsGroup
        type="checkbox"
        name="checkboxes"
        controllers={checkboxes}
        errors={errors}
        handleChange={handleChange}
      />
      <Button type="submit">SUBMIT</Button>
    </Form>
  );
};

export { ReservationForm };

type Action = {
  type: 'UPDATED_FORM';
  payload: { [field in keyof ReservationFormValues]: string };
};

// const initialState: ReservationFormValues = {
//   firstName: '',
//   lastName: '',
// };

// const formReducer = (
//   state: ReservationFormValues,
//   { type, payload }: Action
// ) => {
//   switch (type) {
//     case 'UPDATED_FORM':
//       return { ...state, ...payload };

//     default:
//       throw new Error('Something went wrong');
//   }
// };

const Form = styled(BaseForm)`
  .input {
    color: red;
  }
`;

const Button = styled(BaseButton)``;
