import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TelaVisitantes from './TelaVisitantes';
import VisitorLayout from './TelaInforma';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <TelaVisitantes />,
    },
    {
      path: '/informa',
      element: <VisitorLayout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
