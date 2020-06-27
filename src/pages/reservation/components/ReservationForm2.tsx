import { add } from 'date-fns';
import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { FormProps } from '../../../interfaces/FormProps';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { Controller } from 'react-hook-form';
import { BaseForm } from '../../../components/ui/form/BaseForm';
import { Button } from '@material-ui/core';
import { InputData } from '../../../hook/useFormState';

type Props<FormValues> = FormProps<FormValues> & {
  children?: never;
};

type ReservationForm2Values = {
  date: string;
  guests: string;
  time: string;
};

function ReservationForm2<FormValues extends ReservationForm2Values>({
  control,
  onSubmit,
  register,
  errors,
  handleChange,
  formValues,
  isSubmittable,
}: Props<FormValues>): ReactElement {
  const handleDateChange = (
    date: MaterialUiPickersDate,
    _?: string | null | undefined
  ): void => {
    const inputData: InputData = {
      currentTarget: {
        name: 'data',
        value: date?.toDateString() ?? '',
      },
    };
    handleChange(inputData);
  };

  return (
    <StyledForm onSubmit={onSubmit} noValidate>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          name="date"
          onChange={handleDateChange}
          disableToolbar
          variant="dialog"
          autoOk
          format="MM/dd/yyyy"
          margin="normal"
          label="Reservation's Date"
          value={formValues.date}
          inputRef={register({ required: 'true' })}
          maxDate={add(new Date(), { days: 14 })}
          maxDateMessage="Reservation can only be made 14 days in advance"
          disablePast
          minDateMessage="Reservation cannot be made on a past day"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>

      <Button type="submit" disabled={!isSubmittable}>
        SUBMIT
      </Button>
    </StyledForm>
  );
}

type StyledFormProps = {};
const StyledForm = styled(BaseForm)<StyledFormProps>``;

export default ReservationForm2;
