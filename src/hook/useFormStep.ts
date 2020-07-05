import { useState, useCallback } from 'react';

type Return = {
  currentStep: number;
  nextStep(): void;
  prevStep(): void;
  jumpToStep(step: number): void;
};
/**
 * @description return the currentStep and step controllers
 * @param numberOfSteps the total number of steps, counting from 1
 */
export const useFormStep = (numberOfSteps: number): Return => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = useCallback(() => {
    if (currentStep <= numberOfSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, numberOfSteps]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const jumpToStep = useCallback(
    (step: number) => {
      if (step >= 1 && step <= numberOfSteps) {
        setCurrentStep(step);
      } else {
        throw new Error('selected step is out of range');
      }
    },
    [numberOfSteps]
  );

  return { currentStep, nextStep, prevStep, jumpToStep };
};
