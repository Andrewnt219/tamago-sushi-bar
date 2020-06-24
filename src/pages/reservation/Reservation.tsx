import React from 'react';
import { ReservationForm } from './components/ReservationForm';

interface ReservationProps {}

const Reservation: React.FC<ReservationProps> = () => {
  return (
    <div>
      Reservation
      <ReservationForm />
    </div>
  );
};

export default Reservation;
