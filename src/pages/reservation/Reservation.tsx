import React from 'react';
import { ReservationForm } from './components/ReservationForm';
import { useFormStep } from '../../hook';

interface ReservationProps {}

const Reservation: React.FC<ReservationProps> = () => {
  const [currentStep, nextStep, prevStep, jumpToStep] = useFormStep(2);

  return (
    <div>
      {currentStep}
      <ReservationForm />
      <button onClick={nextStep}>Next</button>
      <button onClick={prevStep}>Prev</button>
      <button onClick={() => jumpToStep(2)}>2</button>
    </div>
  );
};

export default Reservation;
