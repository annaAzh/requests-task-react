import { Header } from '@/widgets/header';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center py-10 grow">
        <Outlet />
      </div>
    </div>
  );
};
