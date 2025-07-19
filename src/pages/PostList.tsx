import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/posts';
import PostCard from '../components/PostCard';

type Post = {
  id: number;
  title: string;
  description: string;
  body: string;
};

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then((data: Post[]) => setPosts(data))
      .finally((): void => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="posts-container">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;