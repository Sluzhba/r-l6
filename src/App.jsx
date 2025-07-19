import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import PostsList from './pages/PostList';
import PostPage from './pages/PostPage';
import { PostsProvider } from './context/PostsContext';

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

const App = () => {
  return (
    <PostsProvider>
      <RouterProvider router={router} >
      <div className="app">
        <h1>My Blog</h1>
        <p>Welcome to my blog! Here are some posts:</p>
      </div>
      </RouterProvider>
    </PostsProvider>
  );
};

export default App;