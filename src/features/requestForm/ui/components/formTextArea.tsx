import { FC } from 'react';
import { RequiredSymbol } from './requiredSymbol';
import { Errors } from './formErrors';
import { Textarea } from '@/shared/components';

interface Props extends React.ComponentProps<'textarea'> {
  id?: string;
  label?: string;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  required?: boolean;
}

export const FormTextarea: FC<Props> = ({ id, label, required, errors, className, ...props }) => {
  return (
    <>
      {label && (
        <label htmlFor={id}>
          {label} {required && <RequiredSymbol />}
        </label>
      )}
      <Textarea id={id} className={className} {...props} />
      {errors && id && <Errors id={id} errors={errors} />}
    </>
  );
};
