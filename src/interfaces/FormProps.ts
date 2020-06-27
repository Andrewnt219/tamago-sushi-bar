import { FormContextValues } from 'react-hook-form';

export interface FormProps<FormValues extends Record<string, any>> {
  onSubmit: () => void;
  register: FormContextValues['register'];
  errors: FormContextValues['errors'];
  formValues: FormValues;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  isSubmittable: boolean;
}
