import { Error404Page } from '../pages/Error404Page';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export const publicRoutes = [
  {
    path: '/register',
    element: Register,
  },
  {
    path: '/login',
    element: Login,
  },
  {
    path: '*',
    element: Error404Page,
  },
];
