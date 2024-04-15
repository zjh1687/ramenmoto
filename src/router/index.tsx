import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';

const App = React.lazy(() => import('../App'));
const Home = React.lazy(() => import('../Home'));

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Layout>
            <Home />
          </Layout>
        ),
      },
    ],
  },
]);

export default router;
