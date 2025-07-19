import { createBrowserRouter } from 'react-router';
import PostsList from './pages/PostList';
import PostPage from './pages/PostPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './components/NavComponent';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navigation />
        <h1>My Blog</h1>
        <p>Welcome to my blog! Here are some posts:</p>
        <PostsList />
      </div>
    ),    
  },
  {
    path: '/posts/:id',
    element: 
      <div>
        <Navigation />
        <PostPage />
      </div>,
  },
  {
    path: '/about',
    element: (
      <div>
        <Navigation />
        <About />
      </div>
    ),
  },
  {
    path: '/contact',
    element: (
      <div>
        <Navigation />
        <Contact />
      </div>
    ),
  },
]);

export default router;