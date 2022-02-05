import { CreatePost } from '../pages/CreatePost';
import { Home } from '../pages/Home';
import { Post } from '../pages/Post';
import { Profile } from '../pages/Profile';

export const privateRoutes = [
  {
    path: '/',
    element: Home,
    exact: true,
  },
  {
    path: '/profile',
    element: Profile,
    exact: true,
  },
  {
    path: '/create-post',
    element: CreatePost,
    exact: true,
  },
  {
    path: '/:id',
    element: Post,
    exact: true,
  },
];
