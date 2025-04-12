import { addRequest, getLastId, RequestType, updateRequest } from '@/entities/request';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { Paths } from '@/shared/types';

export const useRequestForm = (defaultCategory: string, defaultValues?: RequestType) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const lastId = useAppSelector(getLastId);

  const { handleSubmit, control } = useForm<RequestType>({
    defaultValues: {
      title: defaultValues?.title || '',
      description: defaultValues?.description || '',
      category: defaultValues?.category || defaultCategory,
    },
    mode: 'onChange',
  });

  const submitForm = async (data: RequestType) => {
    if (defaultValues?.id) {
      const requestObj = { ...defaultValues, ...data };
      dispatch(updateRequest(requestObj));
    } else {
      const requestObj = { ...data, created: new Date(Date.now()).toString(), id: lastId + 1 };
      dispatch(addRequest(requestObj));
    }
    navigate(Paths.REQUESTS);
  };

  return { handleSubmit, control, submitForm };
};
