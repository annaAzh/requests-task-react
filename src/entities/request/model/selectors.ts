import { RootState } from '@/app/store/store';
import { RequestType } from './types';

export const getRequests = (state: RootState): RequestType[] => {
  return state.requests.requests;
};

export const getLastId = (state: RootState): number => {
  const { requests } = state.requests;
  return requests.length > 0 ? Math.max(...requests.map((request) => request.id)) : 0;
};

export const getRequestById =
  (id: number) =>
  (state: RootState): RequestType | undefined => {
    const { requests } = state.requests;
    return requests.find((request) => request.id === id);
  };
