import { useState, useCallback } from 'react';

/**
 * @description return the currentStep and step controllers
 * @param numberOfSteps the total number of steps, counting from 1
 */
export const useFormStep = (
  numberOfSteps: number
): [number, () => void, () => void, (step: number) => void] => {
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
      }
    },
    [numberOfSteps]
  );

  return [currentStep, nextStep, prevStep, jumpToStep];
};
