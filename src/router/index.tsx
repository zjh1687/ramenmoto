import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import OhLayout from '../layout/OhLayout';

const App = React.lazy(() => import('../App'));
const SwiperList = React.lazy(() => import('../SwiperList'));
const Spline = React.lazy(() => import('../Spline'));
const ItemList = React.lazy(() => import('../ItemList'));
const Oh = React.lazy(() => import('../Oh'));

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Layout>
            <SwiperList />
          </Layout>
        ),
      },
      {
        path: '/kupper',
        element: <Spline />,
      },
      {
        path: '/itemlist',
        element: <ItemList />,
      },
      {
        path: '/oh',
        element: (
          <OhLayout>
            <Oh />
          </OhLayout>
        ),
      },
    ],
  },
]);

export default router;
