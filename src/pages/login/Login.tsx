import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import {
  useLocation,
  RouteComponentProps,
  useHistory,
  Redirect,
} from 'react-router-dom';
import { TextField } from '../../components/ui/form/TextField';
import { BaseForm } from '../../components/ui/form/BaseForm';
import { useForm } from 'react-hook-form';
import { BaseButton } from '../../components/ui/BaseButton';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, userSelector } from '../../features/userSlice';

type Props = {};

export type LoginFormValues = {
  email: string;
  password: string;
};

function Login(props: Props): ReactElement {
  // note the undefined
  const { state } = useLocation<
    { from?: RouteComponentProps['location'] } | undefined
  >();
  const history = useHistory();
  let pathname = state?.from?.pathname ?? '/';
  const { register, errors, handleSubmit, formState } = useForm<
    LoginFormValues
  >({
    mode: 'onChange',
    validateCriteriaMode: 'all',
  });

  const dispatch = useDispatch();
  const { email } = useSelector(userSelector);

  const onSubmit = handleSubmit((formData) => {
    dispatch(authUser(formData));
    history.push(pathname);
  });

  return email ? (
    <Redirect to="/me" />
  ) : (
    <BaseForm onSubmit={onSubmit} noValidate>
      <TextField
        id="login-email"
        label="Email"
        name="email"
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
        id="login-password"
        label="Password"
        name="password"
        type="password"
        errors={errors}
        register={register({ required: 'Password is required' })}
      />

      <SubmitButton disabled={!formState.isValid} type="submit">
        Login
      </SubmitButton>
    </BaseForm>
  );
}

type SubmitButtonProps = {};
const SubmitButton = styled(BaseButton).attrs({ outlined: true })<
  SubmitButtonProps
>``;

export default Login;
