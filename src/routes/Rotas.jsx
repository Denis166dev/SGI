import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cadastrardirigente from './pages/Cadastrardirigente';
import Menu from "../components/Menu";
import MenuDirigentes from "./pages/MenuDirigentes";

const Rotas = () => {
  const router = createBrowserRouter([
    {
      path: "/", element: <Menu />,
      children: [
        { path: "menudirigentes", element: <MenuDirigentes />},
        { path: "cadastro", element: <Cadastrardirigente /> },
      ]
    },
  ]);
  return (<RouterProvider router={router} />);
}

export default Rotas;