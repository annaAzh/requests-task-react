import { FC } from 'react';

interface InputProps extends React.ComponentProps<'input'> {
  id?: string;
  className?: string;
}

export const Input: FC<InputProps> = ({ id, className, ...props }) => {
  return (
    <input
      id={id}
      className={`py-2 px-4 border-[1px] border-slate-300 rounded-xl outline-0 ${className}`}
      aria-describedby={`${id}-error`}
      {...props}
    />
  );
};
