import { FC } from 'react';
import { Options } from '../../model/types/types';
import { RequiredSymbol } from './requiredSymbol';
import { Errors } from './formErrors';

interface Props extends React.ComponentProps<'select'> {
  id?: string;
  options?: Options[];
  label?: string;
  errors?: Record<string, string[] | undefined>;
  className?: string;
  required?: boolean;
}

export const FormSelect: FC<Props> = ({ id, label, errors, options, required, className = '', ...props }) => {
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
      {errors && id && <Errors id={id} errors={errors} />}
    </>
  );
};
