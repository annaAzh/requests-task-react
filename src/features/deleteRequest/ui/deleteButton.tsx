import { deleteRequest } from '@/entities/request';
import { Button } from '@/shared/components';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Paths } from '@/shared/types';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  requestId: number;
}

export const DeleteRequestButton: FC<Props> = ({ requestId }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDeleteRequest = () => {
    dispatch(deleteRequest(requestId));
    navigate(Paths.REQUESTS);
  };

  return (
    <Button variant="danger" onClick={handleDeleteRequest}>
      Удалить заявку
    </Button>
  );
};
