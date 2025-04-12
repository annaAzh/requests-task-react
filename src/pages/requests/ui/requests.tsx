import { useNavigate } from 'react-router-dom';
import { getRequests, RequestCard } from '@/entities/request';
import { Button } from '@/shared/components';
import { useAppSelector } from '@/shared/lib/hooks';
import { Paths } from '@/shared/types';

export const RequestsPage = () => {
  const navigate = useNavigate();
  const requests = useAppSelector(getRequests);

  if (!requests.length || requests.length === 0) {
    return (
      <>
        <Button onClick={() => navigate(Paths.REQUESTS_NEW)} className="mb-8 text-xl">
          Создать заявку
        </Button>

        <p className="text-3xl mb-4">Еще не создано ни одной заявки</p>
      </>
    );
  }
  return (
    <>
      <Button onClick={() => navigate(Paths.REQUESTS_NEW)} className="mb-8 text-xl">
        Создать заявку
      </Button>
      <h1 className="text-3xl mb-4">Заявки:</h1>
      <ul className="flex flex-col gap-4">
        {requests.map((request) => {
          return <RequestCard key={request.id} request={request} />;
        })}
      </ul>
    </>
  );
};
