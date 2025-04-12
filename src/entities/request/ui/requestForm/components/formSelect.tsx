import { FC } from 'react';
import { RequiredSymbol } from './requiredSymbol';
import { Errors } from './formErrors';
import { Options } from '../../../model/types';

interface Props extends React.ComponentProps<'select'> {
  id?: string;
  options?: Options[];
  label?: string;
  error?: string;
  className?: string;
  required?: boolean;
}

export const FormSelect: FC<Props> = ({ id, label, error, options, required, className = '', ...props }) => {
  return (
    <>
      {label && (
        <label htmlFor={id}>
          {label} {required && <RequiredSymbol />}
        </label>
      )}

      <select
        className={`py-2 px-4 border-[1px] border-slate-300 rounded-xl outline-0 relative cursor-pointer ${className}`}
        {...props}
      >
        {options?.map((option) => {
          return (
            <option key={option.id} value={option.title} className="">
              {option.title}
            </option>
          );
        })}
      </select>
      {error && id && <Errors id={id} error={error} />}
    </>
  );
};
