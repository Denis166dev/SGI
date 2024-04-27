import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cadastrardirigente from './pages/Cadastrardirigente';
import Menu from "../components/Menu";
import MenuDirigentes from "./pages/MenuDirigentes";
import TelaVisitantes from './pages/TelaVisitantes';
import VisitorLayout from './pages/TelaInforma';

const Rotas = () => {
  const router = createBrowserRouter([
    {
      path: "/", element: <Menu />,
      children: [
        { path: "menudirigentes", element: <MenuDirigentes />},
        { path: "cadastro", element: <Cadastrardirigente /> },
        {path: '/visitor', element: <TelaVisitantes />},
        {path: '/informa', element: <VisitorLayout />},
      ]
    },
  ]);
  return (<RouterProvider router={router} />);
}

export default Rotas;