import React from 'react';
import { useNavigate } from 'react-router';
import styles from '../assets/PostCard.module.css'; 
import { PostCardProps } from '../context/types';




const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card} onClick={() => navigate(`/posts/${post.id}`)}>
      <div className={styles.title}>{post.title}</div>
      <p>{post.description}</p>
    </div>
  );
};

export default PostCard;