import { FC } from 'react';
import { RequiredSymbol } from './requiredSymbol';
import { Errors } from './formErrors';
import { Input } from '@/shared/components';

interface Props extends React.ComponentProps<'input'> {
  id?: string;
  label?: string;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  required?: boolean;
}

export const FormInput: FC<Props> = ({ id, label, required, errors, className, ...props }) => {
  return (
    <>
      {label && (
        <label htmlFor={id}>
          {label} {required && <RequiredSymbol />}
        </label>
      )}
      <Input id={id} className={className} {...props} />
      {errors && id && <Errors id={id} errors={errors} />}
    </>
  );
};
