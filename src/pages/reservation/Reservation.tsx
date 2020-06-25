import React from 'react';
import styled from 'styled-components/macro';
import { ReservationForm } from './components/ReservationForm';
import { useFormStep } from '../../hook';

interface ReservationProps {}

const Reservation: React.FC<ReservationProps> = () => {
  const NUMBER_OF_STEP = 3;
  const [currentStep, nextStep, prevStep, jumpToStep] = useFormStep(
    NUMBER_OF_STEP
  );

  return (
    <div>
      <Button active={currentStep === 1} onClick={() => jumpToStep(1)}>
        Form 1
      </Button>
      <Button active={currentStep === 2} onClick={() => jumpToStep(2)}>
        Form 2
      </Button>
      <Button active={currentStep === 3} onClick={() => jumpToStep(3)}>
        Form 3
      </Button>
      <ReservationForm currentStep={currentStep} />
      <button onClick={nextStep}>Next</button>
      <button onClick={prevStep}>Prev</button>
      <button onClick={() => jumpToStep(2)}>2</button>
    </div>
  );
};

// function generateStepButton(
//   numberOfStep: number,
//   handleClick: (stepNumber: number) => void
// ): React.ReactNode[] {
//   let stepButtons: React.ReactNode[] = [];
//   for (let i = 1; i <= numberOfStep; i++) {
//     stepButtons.push(
//       <Button active={} value={i} onClick={() => handleClick(i)}>
//         Form {i}
//       </Button>
//     );
//   }
//   return stepButtons;
// }

interface ButtonProps {
  active: boolean;
}
const Button = styled.button<ButtonProps>`
  background: ${(p) => p.active && p.theme.primary};
`;

export default Reservation;
