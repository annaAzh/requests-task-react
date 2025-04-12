import { RequestType } from '@/entities/request';
import { RequestForm } from '@/features/requestForm';
import { FC } from 'react';

interface Props {
  request: RequestType;
}

export const ModalContent: FC<Props> = ({ request }) => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-slate-800 text-center text-2xl font-semibold mb-4">Редактирование заявки</h2>
      <RequestForm className="text-slate-800" defaultValues={request} />
    </div>
  );
};
