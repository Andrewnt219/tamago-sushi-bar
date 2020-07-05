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

type Props<FormValues> = Required<FormProps<FormValues>> & {};

type FormValues = {
  preferredName: string;
  prefix: 'Mr.' | 'Mrs.' | 'Ms.' | 'name';
  email: string;
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
      value: 'Mr.',
    },
    {
      id: 'address--ms',
      label: 'Ms.',
      register: register(),
      value: 'Ms.',
    },
    {
      id: 'address--mrs',
      label: 'Mrs.',
      register: register(),
      value: 'Mrs.',
    },
    {
      id: 'address--none',
      label: 'By name',
      register: register(),
      value: 'name',
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

      <SubmitButton disabled={!isSubmittable} type="submit" outlined>
        NEXT
      </SubmitButton>
    </Form>
  );
}

export { ReservationForm1 };
