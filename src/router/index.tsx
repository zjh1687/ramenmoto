import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const App = React.lazy(() => import('../App'));
// const Home = React.lazy(() => import('../Home'));
const MainPage = React.lazy(() => import('../MainPage'));

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
