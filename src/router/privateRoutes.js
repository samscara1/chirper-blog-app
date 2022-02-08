import { CreatePost } from '../pages/CratePost/CreatePost';
import { Home } from '../pages/Home';
import { PostPage } from '../pages/PostPage';
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
    element: PostPage,
  },
];
