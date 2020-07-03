import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { BaseForm } from '../../../components/ui/form/BaseForm';
import { TextField } from '../../../components/ui/form/TextField';
import { BaseButton } from '../../../components/ui/BaseButton';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../../features/userSlice';
import { generateOrder, orderSelector } from '../../../features/orderSlice';
import Spinner from '../../../components/ui/LoadingScreen/Spinner/Spinner';

type Props = {};

export type CheckoutFormValues = {
  email: string;
  address: string;
};

function Checkout({}: Props): ReactElement {
  const { email, address } = useSelector(userSelector);
  const { isLoading } = useSelector(orderSelector);
  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useForm<CheckoutFormValues>({
    validateCriteriaMode: 'all',
    mode: 'onChange',
    defaultValues: { email: email ?? '', address },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(generateOrder(data));
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

      <SubmitButton type="submit">
        {isLoading ? (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        ) : (
          'ORDER'
        )}
      </SubmitButton>
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

const SpinnerWrapper = styled.span``;
export { Checkout };
