import { add, format } from 'date-fns';
import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components/macro';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { FormProps } from '../../../interfaces/FormProps';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { InputData } from '../../../hook/useFormState';
import { MdAccessTime } from 'react-icons/md';
import {
  ControllerObject,
  ControllerInputsGroup,
} from '../../../components/ui/form/ControllerInputsGroup';
import {
  BaseReservationForm as Form,
  SubmitButton,
} from './ReservationUIComponents';

type Props<FormValues> = FormProps<FormValues> & {
  children?: never;
};

type FormValues = {
  date: string;
  guests: '1' | '2-4' | '4-8';
  time: string;
};
const maxFutureDate = add(new Date(), { days: 14 });
const minDate = add(new Date(), { days: 1 });
function ReservationForm2({
  onSubmit,
  register,
  handleChange,
  formValues,
  isSubmittable,
  errors,
}: Props<FormValues>): ReactElement {
  const handleDateChange = (inputName: keyof FormValues) => (
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

  const radios: ControllerObject<FormValues, typeof formValues.guests>[] = [
    {
      id: 'guest-1',
      label: 'Alone',
      register: register(),
      value: '1',
    },
    {
      id: 'guest-2',
      label: '2-4 guests',
      register: register(),
      value: '2-4',
    },
    {
      id: 'guest-4',
      label: '4-8 guests',
      register: register(),
      value: '4-8',
    },
  ];

  return (
    <Form onSubmit={onSubmit} noValidate>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          name="date"
          autoOk
          onChange={handleDateChange('date')}
          disableToolbar
          variant="dialog"
          format="MM/dd/yyyy"
          margin="normal"
          label="Reservation's Date"
          value={formValues.date}
          inputRef={register({ required: true })}
          minDate={minDate}
          maxDate={maxFutureDate}
          maxDateMessage={`Date must be within 14 days (before ${format(
            maxFutureDate,
            'MM/dd/yy'
          )})`}
          minDateMessage="Date cannot be in the past"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />

        <TimePicker
          name="time"
          minutesStep={15}
          ampm={false}
          autoOk
          keyboardIcon={<MdAccessTime />}
          inputRef={register({ required: true })}
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

      <ControllerInputsGroup
        type="radio"
        label="Number of guests"
        errors={errors}
        defaultCheckedValue={formValues.guests}
        name="guests"
        controllers={radios}
        handleChange={handleChange}
      />

      <SubmitButton type="submit" disabled={!isSubmittable} outlined>
        SUBMIT
      </SubmitButton>
    </Form>
  );
}

const overwritten = css`
  .MuiInputBase-input,
  .MuiFormHelperText-root,
  .MuiInputLabel-root {
    font-size: inherit;
    font-family: 'Montserrat', sans-serif;
  }

  .MuiFormHelperText-root {
    font-style: italic;
  }
`;

interface DatePickerProps {}
const DatePicker = styled(KeyboardDatePicker)<DatePickerProps>`
  ${overwritten}
`;

const TimePicker = styled(KeyboardTimePicker)<DatePickerProps>`
  ${overwritten}
`;

export default ReservationForm2;
