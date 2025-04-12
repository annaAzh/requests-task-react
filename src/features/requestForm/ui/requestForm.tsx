import { FC } from 'react';
import { Button } from '@/shared/components';
import { FormInput, FormSelect, FormTextarea } from './components';
import { useRequestForm } from '../model/hooks/useRequestForm';
import { RequestType } from '@/entities/request';

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
  const { formValues, errors, handleChange, handleSubmitForm } = useRequestForm(defaultCategory, defaultValues);

  return (
    <form onSubmit={(e) => handleSubmitForm(e)} className={`flex flex-col gap-2 max-w-[400px] w-full ${className}`}>
      <FormInput
        value={formValues.title}
        onChange={handleChange}
        placeholder="Название заявки"
        id="title"
        name="title"
        type="text"
        required
        label="Название"
        errors={errors}
      />
      <FormTextarea
        value={formValues.description}
        onChange={handleChange}
        placeholder="Описание"
        id="description"
        name="description"
        required
        label="Описание"
        errors={errors}
      />
      <FormSelect
        value={formValues.category}
        onChange={handleChange}
        id="category"
        name="category"
        options={options}
        required
        label="Категория"
        errors={errors}
      />
      <Button type="submit" className="text-lg w-full">
        {variant === 'create' ? 'Создать заявку' : 'Сохранить изменения'}
      </Button>
    </form>
  );
};
