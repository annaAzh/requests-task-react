import { Paths } from '@/shared/types';
import { RequestsPage } from '@/pages/requests';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RequestNewPage } from '@/pages/requestNew';
import { RequestPage } from '@/pages/request';
import { NotFound } from '@/pages/notFound';
import { Layout } from '@/pages/layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: Paths.REQUESTS,
        element: <RequestsPage />,
      },
      {
        path: Paths.REQUESTS_NEW,
        element: <RequestNewPage />,
      },
      {
        path: Paths.REQUEST,
        element: <RequestPage />,
      },
      {
        path: Paths.NOT_FOUND,
        element: <NotFound />,
      },
    ],
  },
]);

export const RouteProvider = () => {
  return <RouterProvider router={router} />;
};
