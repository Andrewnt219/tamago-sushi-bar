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

interface ReservationForm1Props {
  nextStep: () => void;
}
interface FormValues {
  firstName: string;
  lastName: string;
  prefix: 'mr' | 'mrs' | 'ms' | 'dr' | 'name';
  phoneNumber: string;
  email: string;
}

const ReservationForm1: React.FC<ReservationForm1Props> = ({ nextStep }) => {
  const defaultTheme = useTheme();
  const { handleSubmit, errors, register, formState } = useForm<FormValues>({
    mode: 'onBlur',
    validateCriteriaMode: 'all',
  });

  const [formValues, handleChange] = useFormState<FormValues>({
    firstName: '',
    lastName: '',
    prefix: 'name',
    phoneNumber: '',
    email: '',
  });

  const onSubmit = handleSubmit((_, __) => {
    nextStep();
  });

  const radios: ControllerObject<FormValues, typeof formValues.prefix>[] = [
    {
      id: 'address--mr',
      label: 'Sir',
      register: register(),
      value: 'mr',
    },
    {
      id: 'address--ms',
      label: 'Ms.',
      register: register(),
      value: 'ms',
    },
    {
      id: 'address--mrs',
      label: 'Mrs.',
      register: register(),
      value: 'mrs',
    },
    {
      id: 'address--dr',
      label: 'Dr.',
      register: register(),
      value: 'dr',
    },
    {
      id: 'address--none',
      label: 'By name',
      register: register(),
      value: 'name',
    },
  ];

  return (
    <ThemeProvider theme={{ ...defaultTheme, primary: defaultTheme.lightBlue }}>
      <Form onSubmit={onSubmit} noValidate>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="first name"
          errors={errors}
          value={formValues?.firstName}
          onChange={handleChange}
          register={register({
            required: 'First name is required',
          })}
        />

        <TextField
          required
          type="text"
          id="lastName"
          name="lastName"
          errors={errors}
          label="last name"
          value={formValues?.lastName}
          onChange={handleChange}
          register={register({
            required: 'Last name is required',
          })}
        />

        <TextField
          required
          type="email"
          id="email"
          name="email"
          errors={errors}
          label="email"
          value={formValues?.email}
          onChange={handleChange}
          register={register({
            required: 'Email is required',
            pattern: {
              value: /.*@.*\..+/,
              message: 'Not a valid email',
            },
          })}
        />

        <TextField
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          errors={errors}
          label="phoneNumber"
          value={formValues?.phoneNumber}
          onChange={handleChange}
          register={register({
            pattern: {
              value: /(\d[- ]?){9}\d/,
              message: 'Not a phone number',
            },
          })}
        />

        <ControllerInputsGroup
          type="radio"
          label="how should we address you?"
          name="prefix"
          controllers={radios}
          handleChange={handleChange}
        />

        <Button disabled={!formState.isValid} type="submit" outlined>
          NEXT
        </Button>
      </Form>
    </ThemeProvider>
  );
};

export { ReservationForm1 };

const Form = styled(BaseForm)`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    width: 80%;
  }
`;

const Button = styled(BaseButton)`
  margin-top: 2rem;
`;
