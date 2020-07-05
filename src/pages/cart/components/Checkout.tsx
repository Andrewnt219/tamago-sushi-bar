import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { BaseForm } from '../../../components/ui/form/BaseForm';
import { TextField } from '../../../components/ui/form/TextField';
import { BaseButton } from '../../../components/ui/BaseButton';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../../../features/userSlice';
import { generateOrder, ordersSelector } from '../../../features/orderSlice';
import Spinner from '../../../components/ui/LoadingScreen/Spinner/Spinner';

type Props = {
  onOrderCreated?: () => void;
};

export type CheckoutFormValues = {
  email: string;
  address: string;
};

function Checkout({ onOrderCreated }: Props): ReactElement {
  const { email, address } = useSelector(userSelector);
  const { isLoading, error, orderIsCreated } = useSelector(ordersSelector);
  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useForm<CheckoutFormValues>({
    validateCriteriaMode: 'all',
    mode: 'onChange',
    defaultValues: { email: email ?? '', address },
  });

  const onSubmit = handleSubmit((data) => {
    dispatch(generateOrder(data));
  });

  if (orderIsCreated && !error) {
    onOrderCreated && onOrderCreated();
  }

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
      {error && <ErrorText>{error}</ErrorText>}
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

const ErrorText = styled.span`
  display: inline-block;
  margin-top: 2rem;
  color: ${(p) => p.theme.error};
`;
export { Checkout };
