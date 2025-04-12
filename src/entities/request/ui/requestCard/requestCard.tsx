import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RequestType } from '../../model/types';
import { formatDate } from '../../lib/utils';

interface Props {
  request: RequestType;
}

export const RequestCard: FC<Props> = ({ request }) => {
  return (
    <li>
      <Link
        to={`/requests/${request.id}`}
        className="flex flex-col gap-2 p-4 rounded-xl border-2 border-slate-500 min-w-[340px] hover:shadow-lg shadow-slate-400/20"
      >
        <p className="text-neutral-300 text-lg font-medium">
          <span className="text-slate-500">Название: </span> {request.title}
        </p>
        <p className="text-amber-700 text-lg font-medium">
          <span className="text-slate-500">Дата создания: </span>
          {formatDate(request.created)}
        </p>
      </Link>
    </li>
  );
};
