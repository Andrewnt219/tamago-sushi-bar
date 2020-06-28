import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';

import { TextField } from '../../../components/ui/form/TextField';
import { BaseForm } from '../../../components/ui/form/BaseForm';

import { BaseButton } from '../../../components/ui/BaseButton';
import {
  ControllerObject,
  ControllerInputsGroup,
} from '../../../components/ui/form/ControllerInputsGroup';
import { FormProps } from '../../../interfaces/FormProps';

type Props<FormValues> = FormProps<FormValues> & {};

type FormValues = {
  preferredName: string;
  prefix: 'mr' | 'mrs' | 'ms' | 'dr' | 'name';
  phoneNumber: string;
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
      label: 'Sir',
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
      id: 'address--dr',
      label: 'Dr.',
      register: register(),
      value: 'dr',
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

      <TextField
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        errors={errors}
        label="phone"
        value={formValues?.phoneNumber}
        onChange={handleChange}
        register={register({
          pattern: {
            value: /(\d[- ]?){9}\d/,
            message: 'Not a phone number',
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

      <Button disabled={!isSubmittable} type="submit" outlined>
        NEXT
      </Button>
    </Form>
  );
}

export { ReservationForm1 };

const Form = styled(BaseForm)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  font-size: 1.2rem;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    width: 80%;
  }
`;

const Button = styled(BaseButton)`
  margin-top: 2rem;
`;
