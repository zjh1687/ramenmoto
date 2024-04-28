import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const App = React.lazy(() => import('../App'));
const Space = React.lazy(() => import('../pages/Space'));
const MainPage = React.lazy(() => import('../pages/MainPage'));

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/project/space',
        element: <Space />,
      },
    ],
  },
]);

export default router;
