import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { ExtraFormProps } from '../../../interfaces/FormProps';
import { BaseForm } from '../../../components/ui/form/BaseForm';
import { TextField } from '../../../components/ui/form/TextField';
import { Controllers, Button } from './RegisterUIComponents';
import Spinner from '../../../components/ui/LoadingScreen/Spinner/Spinner';

type Props<FormValues> = ExtraFormProps<FormValues> & {
  onPrevButtonClicked(): void;
};

export type RegisterFormValues2 = {
  preferredName: string;
  phone: string;
  address: string;
};

function RegisterForm2({
  onSubmit,
  register,
  errors,
  isSubmittable,
  getValues,
  handleChange,
  formValues,
  onPrevButtonClicked,
  isSubmitting,
}: Props<RegisterFormValues2>): ReactElement {
  return (
    <Form onSubmit={onSubmit} noValidate>
      <TextField
        required
        id="register-preferredName"
        name="preferredName"
        label="Preferred Name"
        type="text"
        errors={errors}
        onChange={handleChange}
        defaultValue={formValues?.preferredName}
        register={register({ required: 'Preferred name is required' })}
      />

      <TextField
        required
        id="register-address"
        type="text"
        name="address"
        label="Address"
        errors={errors}
        defaultValue={formValues?.address}
        onChange={handleChange}
        register={register({ required: 'Address is required' })}
      />

      <TextField
        id="register-phone"
        type="tel"
        name="phone"
        label="Phone"
        errors={errors}
        onChange={handleChange}
        defaultValue={formValues?.phone}
        register={register({
          pattern: {
            value: /(\d[- ]?){9}\d$/,
            message: 'Not a valid Canadian number',
          },
        })}
      />

      <Controllers>
        <Button onClick={onPrevButtonClicked}>PREVIOUS</Button>

        <Button disabled={!isSubmittable} type="submit">
          {isSubmitting ? <Spinner color="#fff" size="1.2rem" /> : 'SUBMIT'}
        </Button>
      </Controllers>
    </Form>
  );
}

type ContainerProps = {};
const Form = styled(BaseForm)<ContainerProps>``;

export { RegisterForm2 };
