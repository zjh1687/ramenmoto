import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';

import './styles/index.scss';
import router from './router';
import Loading from './Loading';

const app = createRoot(document.getElementById('root')!);
app.render(
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
  </Suspense>,
);
