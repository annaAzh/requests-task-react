import { FC } from 'react';
import { RequiredSymbol } from './requiredSymbol';
import { Errors } from './formErrors';
import { Textarea } from '@/shared/components';

interface Props extends React.ComponentProps<'textarea'> {
  id?: string;
  label?: string;
  error?: string;
  className?: string;
  required?: boolean;
}

export const FormTextarea: FC<Props> = ({ id, label, required, error, className, ...props }) => {
  return (
    <>
      {label && (
        <label htmlFor={id}>
          {label} {required && <RequiredSymbol />}
        </label>
      )}
      <Textarea id={id} className={className} {...props} />
      {error && id && <Errors id={id} error={error} />}
    </>
  );
};
