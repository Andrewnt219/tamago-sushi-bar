import { useState } from 'react';

type handleInputChange = (e: React.FormEvent<HTMLInputElement>) => void;

export const useFormState = <FormValues>(
  initialState: FormValues
): [FormValues, handleInputChange] => {
  const [formState, setFormState] = useState<FormValues>(initialState);

  const handleInputChange: handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormState((prev): FormValues => ({ ...prev, [name]: value }));
  };

  return [formState, handleInputChange];
};
