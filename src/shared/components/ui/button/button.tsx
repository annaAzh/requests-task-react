import { FC } from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`p-2 px-4 flex items-center justify-center border-[1px] border-slate-500 cursor-pointer rounded-xl hover:bg-slate-500 transition-all duration-300 hover:text-black w-fit text-sm disabled:opacity-30 disabled:pointer-events-none"  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
