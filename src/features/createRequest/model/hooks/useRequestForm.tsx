import { Paths } from '@/shared/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRequestForm = (defaultCategory: string) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string[] | undefined>>({});
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    category: defaultCategory,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, category } = formValues;
    const newErrors: Record<string, string[] | undefined> = {};

    if (!title.trim()) newErrors.title = ['Название обязательно'];
    if (!description.trim()) newErrors.description = ['Описание обязательно'];
    if (!category.trim()) newErrors.category = ['Категория обязательна'];

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate(Paths.REQUESTS);
  };

  return {
    formValues,
    errors,
    handleChange,
    handleSubmitForm,
  };
};
