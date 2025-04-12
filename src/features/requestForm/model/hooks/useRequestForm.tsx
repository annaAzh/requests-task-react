import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { Paths } from '@/shared/types';
import { addRequest, getLastId, RequestType, updateRequest } from '@/entities/request';

export const useRequestForm = (defaultCategory: string, defaultValues?: RequestType) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const lastId = useAppSelector(getLastId);

  const [errors, setErrors] = useState<Record<string, string[] | undefined>>({});
  const [formValues, setFormValues] = useState({
    title: defaultValues?.title || '',
    description: defaultValues?.description || '',
    category: defaultValues?.category || defaultCategory,
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

    if (defaultValues?.id) {
      const requestObj = { ...defaultValues, ...formValues };
      dispatch(updateRequest(requestObj));
    } else {
      const requestObj = { ...formValues, created: new Date(Date.now()).toString(), id: lastId + 1 };
      dispatch(addRequest(requestObj));
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
