import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const App = React.lazy(() => import('../App'));
const HorizontalContents = React.lazy(
  () => import('../pages/HorizontalContents'),
);
const SpacePage = React.lazy(() => import('../pages/SpacePage'));
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
        path: '/project/horizon',
        element: <HorizontalContents />,
      },
      {
        path: '/project/space',
        element: <SpacePage />,
      },
    ],
  },
]);

export default router;
