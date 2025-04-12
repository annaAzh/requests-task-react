import { useParams } from 'react-router-dom';
import { getRequestById } from '@/entities/request';
import { DeleteRequestButton } from '@/features/deleteRequest';
import { ModalContent } from '@/features/editRequest';
import { ModalWindow } from '@/shared/components';
import { useAppSelector } from '@/shared/lib/hooks';

export const RequestPage = () => {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const request = useAppSelector(getRequestById(id));

  if (!request) {
    return <div className="text-xl">Заявка с id {id} не найдена</div>;
  }

  return (
    <div className="bg-slate-400 p-6 w-full flex justify-center font-medium text-xl text-gray-700">
      <div className="min-w-[360px] space-y-5">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-4">Заявка №{request.id}</h2>

        <div>
          <span className="font-semibold text-slate-500">Название: </span>
          {request.title}
        </div>

        <div>
          <span className="font-semibold text-slate-500">Описание: </span>
          {request.description}
        </div>

        <div>
          <span className="font-semibold text-slate-500">Категория: </span>
          {request.category}
        </div>

        <div>
          <span className="font-semibold text-slate-500">Дата создания: </span>
          {new Date(request.created).toLocaleString()}
        </div>

        <div className="flex justify-between pt-4 border-t border-slate-600 mt-6">
          <ModalWindow renderContent={() => <ModalContent request={request} />}>Редактировать заявку</ModalWindow>
          <DeleteRequestButton requestId={id} />
        </div>
      </div>
    </div>
  );
};
