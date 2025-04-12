import { FC } from 'react';
import { Button } from '@/shared/components';
import { FormInput, FormSelect, FormTextarea } from './components';
import { RequestType } from '@/entities/request';
import { Controller } from 'react-hook-form';
import { useRequestForm } from '../../lib/hooks/useRequestForm';

const options = [
  {
    id: 1,
    title: 'Категория 1',
  },
  {
    id: 2,
    title: 'Категория 2',
  },
  {
    id: 3,
    title: 'Категория 3',
  },
];

interface Props {
  className?: string;
  variant?: 'create' | 'edit';
  defaultValues?: RequestType;
}

export const RequestForm: FC<Props> = ({ className, variant, defaultValues }) => {
  const defaultCategory = options[0].title;
  const { handleSubmit, control, submitForm } = useRequestForm(defaultCategory, defaultValues);

  return (
    <form onSubmit={handleSubmit(submitForm)} className={`flex flex-col gap-2 max-w-[400px] w-full ${className}`}>
      <Controller
        control={control}
        name="title"
        rules={{ required: 'Название обязательно' }}
        render={({ field, fieldState: { error } }) => (
          <FormInput
            id="title"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            error={error?.message}
            label="Название"
            name="name"
            required
          />
        )}
      />
      <Controller
        control={control}
        name="description"
        rules={{ required: 'Описание обязательно' }}
        render={({ field, fieldState: { error } }) => (
          <FormTextarea
            placeholder="Описание"
            name="description"
            required
            label="Описание"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            error={error?.message}
            id="description"
          />
        )}
      />
      <Controller
        control={control}
        name="category"
        rules={{ required: 'Категория обязательна' }}
        render={({ field, fieldState: { error } }) => {
          return (
            <FormSelect
              id="category"
              name="category"
              options={options}
              required
              label="Категория"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              error={error?.message}
            />
          );
        }}
      />
      <Button type="submit" className="text-lg w-full">
        {variant === 'create' ? 'Создать заявку' : 'Сохранить изменения'}
      </Button>
    </form>
  );
};
