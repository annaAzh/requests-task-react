import { FC } from 'react';
import { RequiredSymbol } from './requiredSymbol';
import { Errors } from './formErrors';
import { Input } from '@/shared/components';

interface Props extends React.ComponentProps<'input'> {
  id?: string;
  label?: string;
  error?: string;
  className?: string;
  required?: boolean;
}

export const FormInput: FC<Props> = ({ id, label, required, error, className, ...props }) => {
  return (
    <>
      {label && (
        <label htmlFor={id}>
          {label} {required && <RequiredSymbol />}
        </label>
      )}
      <Input id={id} className={className} {...props} />
      {error && id && <Errors id={id} error={error} />}
    </>
  );
};
