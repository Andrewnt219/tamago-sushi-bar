import React from 'react';
import styled from 'styled-components/macro';
import { ReservationForm1 } from './components/ReservationForm1';
import { useFormStep } from '../../hook';
import { BaseButton } from '../../components/ui/BaseButton';
import ReservationForm2 from './components/ReservationForm2';

interface ReservationProps {}

const Reservation: React.FC<ReservationProps> = () => {
  const NUMBER_OF_STEP = 3;
  const [currentStep, nextStep, prevStep, jumpToStep] = useFormStep(
    NUMBER_OF_STEP
  );

  let form;
  switch (currentStep) {
    case 1:
      form = <ReservationForm1 />;
      break;
    case 2:
      form = <ReservationForm2 />;
      break;

    default:
      throw new Error('No form matches currentStep');
  }

  return (
    <div>
      <FormSelectButton
        active={currentStep === 1}
        onClick={() => jumpToStep(1)}
      >
        Form 1
      </FormSelectButton>

      <FormSelectButton
        active={currentStep === 2}
        onClick={() => jumpToStep(2)}
      >
        Form 2
      </FormSelectButton>

      {form}

      <FormController onClick={nextStep}>Next</FormController>
      <FormController onClick={prevStep}>Prev</FormController>
    </div>
  );
};

interface ButtonProps {
  active: boolean;
}
const FormSelectButton = styled.button<ButtonProps>`
  background: ${(p) => p.active && p.theme.primary};
`;

const FormController = styled(BaseButton)``;

export default Reservation;
