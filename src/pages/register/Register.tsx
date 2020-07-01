import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { BaseForm } from '../../components/ui/form/BaseForm';
import { useForm } from 'react-hook-form';
import { TextField } from '../../components/ui/form/TextField';
import { BaseButton } from '../../components/ui/BaseButton';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../features/userSlice';

type Props = {};

export type RegisterFormValues = {
  email: string;
  password: string;
};

function Register({}: Props): ReactElement {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm<RegisterFormValues>({
    mode: 'onChange',
    validateCriteriaMode: 'all',
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(registerUser(data));
  });

  return (
    <BaseForm onSubmit={onSubmit}>
      <TextField
        id="register-email"
        name="email"
        label="Email"
        type="email"
        errors={errors}
        register={register({ required: 'Email is required' })}
      />
      <TextField
        id="register-password"
        type="password"
        name="password"
        label="Password"
        errors={errors}
        register={register({ required: 'Password is required' })}
      />

      <SubmitButton type="submit">Sign up</SubmitButton>
    </BaseForm>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

type SubmitButtonProps = {};
const SubmitButton = styled(BaseButton).attrs({ outlined: true })<
  SubmitButtonProps
>``;

export default Register;
