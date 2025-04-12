import { FC } from 'react';

interface ErrorsProps {
  id: string;
  error?: string;
}

export const Errors: FC<ErrorsProps> = ({ id, error }) => {
  if (!error) {
    return null;
  }

  return (
    <div id={`${id}-error`} aria-live="polite">
      <div className="font-medium text-red-500">{error}</div>
    </div>
  );
};
