import React from 'react';
import { RouterProvider } from 'react-router';
import { PostsProvider } from './context/PostsContext';
import router from './routes';

const App = () => {
  return (
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  );
};

export default App;