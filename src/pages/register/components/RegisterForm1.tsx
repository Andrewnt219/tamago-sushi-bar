import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { ExtraFormProps } from '../../../interfaces/FormProps';
import { BaseForm } from '../../../components/ui/form/BaseForm';
import { TextField } from '../../../components/ui/form/TextField';
import { Controllers, Button } from './RegisterUIComponents';
import Spinner from '../../../components/ui/LoadingScreen/Spinner/Spinner';

type Props<FormValues> = ExtraFormProps<FormValues> & {
  onNextButtonClicked(): void;
  enableNextStep: boolean;
};

export type RegisterFormValues1 = {
  email: string;
  password: string;
  confirmPassword: string;
};

function RegisterForm1({
  onSubmit,
  register,
  errors,
  isSubmittable,
  getValues,
  onNextButtonClicked,
  enableNextStep,
  handleChange,
  formValues,
  isSubmitting,
}: Props<RegisterFormValues1>): ReactElement {
  return (
    <Form onSubmit={onSubmit} noValidate>
      <TextField
        required
        id="register-email"
        name="email"
        label="Email"
        type="email"
        errors={errors}
        defaultValue={formValues?.email}
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
        required
        id="register-password"
        type="password"
        name="password"
        label="Password"
        defaultValue={formValues?.password}
        errors={errors}
        onChange={handleChange}
        register={register({
          required: 'Password is required',
        })}
      />

      <TextField
        required
        id="register-confirmPassword"
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        errors={errors}
        defaultValue={formValues?.confirmPassword}
        onChange={handleChange}
        register={register({
          validate: (value: string) => {
            return (
              (getValues && value === getValues().password) ||
              'Password does not match'
            );
          },
        })}
      />

      <Controllers>
        <Button disabled={!isSubmittable} type="submit">
          {isSubmitting ? <Spinner color="#fff" size="1.2rem" /> : 'VERIFY'}
        </Button>

        <Button disabled={!enableNextStep} onClick={onNextButtonClicked}>
          NEXT
        </Button>
      </Controllers>
    </Form>
  );
}

type ContainerProps = {};
const Form = styled(BaseForm)<ContainerProps>``;

export { RegisterForm1 };
