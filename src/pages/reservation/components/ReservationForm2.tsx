import { add } from 'date-fns';
import React, { ReactElement, useState } from 'react';
import styled from 'styled-components/macro';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

type Props = {};
type ReservationForm2Values = {
  date: string;
  guests: string;
  time: string;
};

function ReservationForm2(props: Props): ReactElement {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <Container>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="dialog"
          autoOk
          format="MM/dd/yyyy"
          margin="normal"
          label="Reservation's Date"
          value={date}
          onChange={(date) => setDate(date)}
          maxDate={add(new Date(), { days: 14 })}
          maxDateMessage="Reservation can only be made 14 days in advance"
          disablePast
          minDateMessage="Reservation cannot be made on a past day"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </Container>
  );
}

type ContainerProps = {};
const Container = styled.div<ContainerProps>``;

export default ReservationForm2;
