import { useParams, useNavigate } from 'react-router';
import { usePosts } from '../context/PostsContext';
import styles from '../assets/PostDetails.module.css';
import ReactMarkdown from 'react-markdown';

const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, loading } = usePosts();

  if (loading) return (
    <div className={styles.loading}>
      <div className={styles.loadingSpinner}></div>
      Loading...
    </div>
  );

  const post = posts.find(p => String(p.id) === String(id));
  if (!post) return <div>Пост не найден</div>;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.body}>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default PostDetails;