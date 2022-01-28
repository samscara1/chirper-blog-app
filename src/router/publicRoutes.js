import { Error404Page } from '../pages/Error404Page';
import { AuthPage } from '../pages/AuthPage';

export const publicRoutes = [
  {
    path: '/login',
    element: AuthPage,
    exact: true,
  },
  {
    path: '*',
    element: Error404Page,
    exact: true,
  },
];
