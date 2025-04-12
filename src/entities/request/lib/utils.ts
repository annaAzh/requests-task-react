import { ISODate } from '../model/types';

export const formatDate = (data: ISODate) => {
  return new Date(data).toLocaleString();
};
