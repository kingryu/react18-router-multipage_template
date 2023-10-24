import routes from './routes.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import './App.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
