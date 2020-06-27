import { add } from 'date-fns';
import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { FormProps } from '../../../interfaces/FormProps';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { BaseForm } from '../../../components/ui/form/BaseForm';
import { Button } from '@material-ui/core';
import { InputData } from '../../../hook/useFormState';
import { MdAccessTime } from 'react-icons/md';
import ErrorText from '../../../components/ui/form/ErrorText';
type Props<FormValues> = FormProps<FormValues> & {
  children?: never;
};

type ReservationForm2Values = {
  date: string;
  guests: string;
  time: string;
};

function ReservationForm2<FormValues extends ReservationForm2Values>({
  onSubmit,
  register,
  errors,
  handleChange,
  formValues,
  isSubmittable,
}: Props<FormValues>): ReactElement {
  console.log(errors);
  const handleDateChange = (inputName: keyof ReservationForm2Values) => (
    date: MaterialUiPickersDate
  ): void => {
    const inputData: InputData = {
      currentTarget: {
        name: inputName,
        value: date?.toString() ?? new Date().toString(),
      },
    };
    handleChange(inputData);
  };

  return (
    <StyledForm onSubmit={onSubmit} noValidate>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          name="date"
          onChange={handleDateChange('date')}
          disableToolbar
          variant="dialog"
          autoOk
          format="MM/dd/yyyy"
          margin="normal"
          label="Reservation's Date"
          value={formValues.date}
          inputRef={register()}
          maxDate={add(new Date(), { days: 14 })}
          maxDateMessage="Reservation can only be made 14 days in advance"
          disablePast
          minDateMessage="Reservation cannot be made on a past day"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        <KeyboardTimePicker
          name="time"
          ampm={false}
          autoOk
          keyboardIcon={<MdAccessTime />}
          inputRef={register({ required: 'true' })}
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={formValues.time}
          onChange={handleDateChange('time')}
          KeyboardButtonProps={{
            'aria-label': 'change time',
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
