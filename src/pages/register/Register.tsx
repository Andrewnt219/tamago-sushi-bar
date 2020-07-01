import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { BaseForm } from '../../components/ui/form/BaseForm';
import { useForm } from 'react-hook-form';
import { TextField } from '../../components/ui/form/TextField';
import { BaseButton } from '../../components/ui/BaseButton';

type Props = {};

type FormValues = {
  email: string;
  password: string;
};

function Register({}: Props): ReactElement {
  const { register, handleSubmit, errors } = useForm<FormValues>({
    mode: 'onChange',
    validateCriteriaMode: 'all',
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <BaseForm onSubmit={onSubmit}>
      <TextField
        id="register-email"
        name="email"
        label="Email"
        errors={errors}
        register={register({ required: 'Email is required' })}
      />
      <TextField
        id="register-password"
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
