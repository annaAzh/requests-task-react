import { FC } from 'react';

interface ErrorsProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

export const Errors: FC<ErrorsProps> = ({ id, errors }) => {
  if (!errors) {
    return null;
  }

  return (
    <div id={`${id}-error`} aria-live="polite">
      {errors?.[id]?.map((error: string) => (
        <div key={error} className="font-medium text-red-500">
          {error}
        </div>
      ))}
    </div>
  );
};
