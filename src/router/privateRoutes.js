import { CreatePost } from '../pages/CreatePost';
import { Home } from '../pages/Home';
import { Post } from '../pages/Post';
import { Profile } from '../pages/Profile';

export const privateRoutes = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/profile',
    element: Profile,
  },
  {
    path: '/create-post',
    element: CreatePost,
  },
  {
    path: '/:id',
    element: Post,
  },
];
