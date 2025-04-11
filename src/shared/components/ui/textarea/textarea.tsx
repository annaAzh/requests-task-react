import { FC } from 'react';

interface Props extends React.ComponentProps<'textarea'> {
  id?: string;
  className?: string;
}

export const Textarea: FC<Props> = ({ id, className, ...props }) => {
  return (
    <textarea
      id={id}
      className={`py-2 px-4 border-[1px] border-slate-300 rounded-xl outline-0 ${className}`}
      aria-describedby={`${id}-error`}
      {...props}
    />
  );
};
