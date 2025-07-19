import { createBrowserRouter } from 'react-router';
import PostsList from './pages/PostList';
import PostPage from './pages/PostPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PostsList />,
  },
  {
    path: '/posts/:id',
    element: <PostPage />,
  },
]);

export default router;