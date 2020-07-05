import { FormContextValues } from 'react-hook-form';
import { handleInputChange } from '../hook/useFormState';
export type FormProps<FormValues extends Record<string, any>> = {
  onSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
  register: FormContextValues<FormValues>['register'];
  errors: FormContextValues<FormValues>['errors'];
  formValues?: FormValues;
  handleChange?: handleInputChange;
  isSubmittable: boolean;
  isSubmitting: boolean;
};

export type ExtraFormProps<FormValues extends Record<string, any>> = FormProps<
  FormValues
> & {
  control?: FormContextValues['control'];
  triggerValidation?: FormContextValues<FormValues>['triggerValidation'];
  setError?: FormContextValues<FormValues>['setError'];
  getValues?: FormContextValues<FormValues>['getValues'];
};
