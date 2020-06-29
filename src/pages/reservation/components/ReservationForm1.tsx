import React, { ReactElement } from 'react';

import { TextField } from '../../../components/ui/form/TextField';
import {
  ControllerObject,
  ControllerInputsGroup,
} from '../../../components/ui/form/ControllerInputsGroup';
import { FormProps } from '../../../interfaces/FormProps';
import {
  SubmitButton,
  BaseReservationForm as Form,
} from './ReservationUIComponents';

type Props<FormValues> = FormProps<FormValues> & {};

type FormValues = {
  preferredName: string;
  prefix: 'mr' | 'mrs' | 'ms' | 'name';
  email: string;
  createAccount: 'yes' | 'no';
};

function ReservationForm1({
  onSubmit,
  register,
  errors,
  formValues,
  handleChange,
  isSubmittable,
}: Props<FormValues>): ReactElement {
  const radios: ControllerObject<FormValues, typeof formValues.prefix>[] = [
    {
      id: 'address--mr',
      label: 'Mr.',
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
      id: 'address--none',
      label: 'By name',
      register: register(),
      value: 'name',
    },
  ];

  const checkboxes: ControllerObject<
    FormValues,
    typeof formValues['createAccount']
  >[] = [
    {
      id: 'create-account-yes',
      label: 'Yes, remember me',
      register: register(),
      value: 'yes',
    },
  ];

  return (
    <Form onSubmit={onSubmit} noValidate>
      <TextField
        required
        id="preferredName"
        name="preferredName"
        label="preferred name"
        errors={errors}
        value={formValues?.preferredName}
        onChange={handleChange}
        register={register({
          required: 'A name is required',
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

      <ControllerInputsGroup
        type="radio"
        label="how should we address you?"
        errors={errors}
        defaultCheckedValue={formValues.prefix}
        name="prefix"
        controllers={radios}
        handleChange={handleChange}
      />

      <ControllerInputsGroup
        type="checkbox"
        label="Create an account with these info?"
        errors={errors}
        name="createAccount"
        controllers={checkboxes}
        handleChange={handleChange}
      />

      <SubmitButton disabled={!isSubmittable} type="submit" outlined>
        NEXT
      </SubmitButton>
    </Form>
  );
}

export { ReservationForm1 };
