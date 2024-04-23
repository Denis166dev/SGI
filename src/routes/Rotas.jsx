import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cadastrardirigente from './pages/Cadastrardirigente';

const Rotas = () => {
    const router = createBrowserRouter([
        {path: "cadastro", element: <Cadastrardirigente />},
      ]);
      return (<RouterProvider router={router} />);    
}

export default Rotas;