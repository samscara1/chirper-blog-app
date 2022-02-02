import { Error404Page } from '../pages/Error404Page';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const publicRoutes = [
  {
    path: '/register',
    element: Register,
    exact: true,
  },
  {
    path: '/login',
    element: Login,
    exact: true,
  },
  {
    path: '*',
    element: Error404Page,
    exact: true,
  },
];
