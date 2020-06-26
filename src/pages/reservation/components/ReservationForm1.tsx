import React from 'react';
import styled, { useTheme, ThemeProvider } from 'styled-components/macro';

import { TextField } from '../../../components/ui/form/TextField';
import { BaseForm } from '../../../components/ui/form/BaseForm';
import { useForm } from 'react-hook-form';
import { BaseButton } from '../../../components/ui/BaseButton';
import {
  ControllerObject,
  ControllerInputsGroup,
} from '../../../components/ui/form/ControllerInputsGroup';
import { useFormState } from '../../../hook/useFormState';

interface ReservationForm1Props {}
interface FormValues {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  phoneNumber: string;
  email: string;
}

const ReservationForm1: React.FC<ReservationForm1Props> = () => {
  const defaultTheme = useTheme();
  const { handleSubmit, errors, register } = useForm<FormValues>({
    mode: 'onBlur',
    validateCriteriaMode: 'all',
  });

  const [formState, handleChange] = useFormState<FormValues>({
    firstName: '',
    lastName: '',
    gender: 'male',
    phoneNumber: '',
    email: '',
  });

  const onSubmit = handleSubmit((data, e) => {
    console.log('Submit event', e);
    console.log(data);
  });

  const radios: ControllerObject<FormValues, typeof formState.gender>[] = [
    {
      id: 'radio1',
      label: 'Radio 1st',
      register: register(),
      value: 'male',
    },
    {
      id: 'radio2',
      label: 'Radio 2nd',
      register: register(),
      value: 'female',
    },
    {
      id: 'radio3',
      label: 'Radio 3rd',
      register: register(),
      value: 'other',
    },
  ];

  return (
    <ThemeProvider theme={{ ...defaultTheme, primary: defaultTheme.lightBlue }}>
      <Form onSubmit={onSubmit} noValidate>
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
          type="number"
          id="lastName"
          name="lastName"
          errors={errors}
          label="last name"
          value={formState?.lastName}
          onChange={handleChange}
          register={register()}
        />

        <ControllerInputsGroup
          type="radio"
          name="gender"
          controllers={radios}
          handleChange={handleChange}
        />

        <Button type="submit">SUBMIT</Button>
      </Form>
    </ThemeProvider>
  );
};

export { ReservationForm1 };

const Form = styled(BaseForm)`
  width: 60%;
  margin: 0 auto;
`;

const Button = styled(BaseButton)``;
