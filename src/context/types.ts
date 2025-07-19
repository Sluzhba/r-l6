export interface Post {
  id: number;
  title: string;
  description: string;
  body: string;
}

export interface PostCardProps {
  post: Post;
}