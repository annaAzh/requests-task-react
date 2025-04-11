import { store } from '@/app/store/store';
import { FC } from 'react';
import { Provider } from 'react-redux';

interface Props {
  children: React.ReactNode;
}

export const StoreProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
