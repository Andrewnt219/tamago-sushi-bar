import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { BaseForm } from '../../../components/ui/form/BaseForm';
import { TextField } from '../../../components/ui/form/TextField';
import { BaseButton } from '../../../components/ui/BaseButton';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../features/userSlice';

type Props = {};

type FormValues = {
  email: string;
  address: string;
};

function Checkout({}: Props): ReactElement {
  const { email, address } = useSelector(userSelector);

  const { handleSubmit, register, errors } = useForm<FormValues>({
    validateCriteriaMode: 'all',
    mode: 'onChange',
    defaultValues: { email: email ?? '', address },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Form noValidate onSubmit={onSubmit}>
      <TextField
        required
        id="checkout-email"
        name="email"
        label="Email"
        type="email"
        errors={errors}
        register={register({
          required: 'Email is required for updates',
          pattern: {
            value: /.*@.*\..+/,
            message: 'Not a valid email',
          },
        })}
      />

      <TextField
        required
        id="checout-address"
        name="address"
        label="Address"
        type="text"
        errors={errors}
        register={register({ required: 'Address is required' })}
      />

      <SubmitButton type="submit">ORDER</SubmitButton>
    </Form>
  );
}

const Form = styled(BaseForm)``;

const SubmitButton = styled(BaseButton).attrs({ contained: true })`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export { Checkout };
