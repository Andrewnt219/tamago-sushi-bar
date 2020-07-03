import React, { ReactElement } from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components/macro';
import { BaseForm } from '../../components/ui/form/BaseForm';
import { useForm } from 'react-hook-form';
import { TextField } from '../../components/ui/form/TextField';
import { BaseButton } from '../../components/ui/BaseButton';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../features/userSlice';
import { useTitle, useScrollToTop } from '../../hook';

type Props = {
  className?: string;
  defaultValues?: Partial<RegisterFormValues>;
};

export type RegisterFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
  preferredName: string;
  address: string;
  phone: string;
};

function Register({ className, defaultValues }: Props): ReactElement {
  const dispatch = useDispatch();
  useTitle('Sign up');
  useScrollToTop();

  const { register, handleSubmit, errors, getValues, formState } = useForm<
    RegisterFormValues
  >({
    mode: 'onChange',
    validateCriteriaMode: 'all',
    defaultValues: {
      ...defaultValues,
    },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(registerUser(data));
  });

  return (
    <ThemeProvider
      theme={(theme): DefaultTheme => ({ ...theme, primary: theme.formTheme })}
    >
      <BaseForm onSubmit={onSubmit} noValidate className={className}>
        <TextField
          required
          id="register-email"
          name="email"
          label="Email"
          type="email"
          errors={errors}
          register={register({
            required: 'Email is required',
            pattern: {
              value: /.*@.*\..+/,
              message: 'Not a valid email',
            },
          })}
        />

        <TextField
          required
          id="register-password"
          type="password"
          name="password"
          label="Password"
          errors={errors}
          register={register({ required: 'Password is required' })}
        />

        <TextField
          required
          id="register-confirmPassword"
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          errors={errors}
          register={register({
            validate: (value: string) =>
              value === getValues().password || 'Password does not match',
          })}
        />

        <TextField
          required
          id="register-preferredName"
          name="preferredName"
          label="Preferred Name"
          type="text"
          errors={errors}
          register={register({ required: 'Preferred name is required' })}
        />

        <TextField
          required
          id="register-address"
          type="text"
          name="address"
          label="Address"
          errors={errors}
          register={register({ required: 'Address is required' })}
        />

        <TextField
          id="register-phone"
          type="tel"
          name="phone"
          label="Phone"
          errors={errors}
          register={register({
            pattern: {
              value: /(\d[- ]?){9}\d$/,
              message: 'Not a valid Canadian number',
            },
          })}
        />

        <SubmitButton disabled={!formState.isValid} type="submit">
          Sign up
        </SubmitButton>
      </BaseForm>
    </ThemeProvider>
  );
}

type SubmitButtonProps = {};
const SubmitButton = styled(BaseButton).attrs({ outlined: true })<
  SubmitButtonProps
>``;

export default Register;
