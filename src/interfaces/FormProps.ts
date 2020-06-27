import { FormContextValues } from 'react-hook-form';
import { handleInputChange } from '../hook/useFormState';
export type FormProps<FormValues extends Record<string, any>> = {
  onSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
  register: FormContextValues['register'];
  errors: FormContextValues['errors'];
  formValues: FormValues;
  handleChange: handleInputChange;
  isSubmittable: boolean;
  control?: FormContextValues['control'];
};
