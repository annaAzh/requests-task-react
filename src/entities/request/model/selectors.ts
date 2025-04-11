import { RootState } from '@/app/store/store';
import { Request } from './types';

export const getRequests = (state: RootState): Request[] => {
  return state.requests.requests;
};
