import { FC } from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'danger' | 'icon';
}

export const Button: FC<ButtonProps> = ({ children, className, variant = 'primary', ...props }) => {
  const baseStyles =
    'p-2 px-4 flex items-center justify-center border-[1px] cursor-pointer rounded-xl transition-all duration-300 hover:text-black w-fit disabled:opacity-30 disabled:pointer-events-none';
  const variants = {
    primary: 'border-slate-500 hover:bg-slate-500 text-sm',
    danger: 'border-amber-800 hover:bg-red-800 hover:text-neutral-300 text-red-800 text-sm',
    icon: 'text-gray-800 text-3xl font-semibold border-none hover:bg-transparent hover:opacity-70 hover:scale-120',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
