import { Paths } from '@/shared/types';
import { Button } from '@/shared/components';
import { useNavigate } from 'react-router';

export const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(Paths.REQUESTS);
  };
  return (
    <div className="flex flex-col justify-center items-center grow">
      <div className="text-6xl mb-4">
        404 <span className="text-3xl">страница</span>
      </div>
      <Button onClick={handleClick}>Вернуться на главную</Button>
    </div>
  );
};
