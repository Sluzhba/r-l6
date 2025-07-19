import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { fetchPosts } from '../api/posts';

type PostsContextType = {
  posts: any[];
  loading: boolean;
};

const PostsContext = createContext<PostsContextType>({
  posts: [],
  loading: true,
});

export const usePosts = () => useContext(PostsContext);

type PostsProviderProps = {
  children: ReactNode;
};

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <PostsContext.Provider value={{ posts, loading }}>
      {children}
    </PostsContext.Provider>
  );
};