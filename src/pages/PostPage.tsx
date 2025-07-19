import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router';
import { fetchPostById } from '../api/posts';
import PostDetails from '../components/PostDetails';
import { Post } from '../context/types';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const getPost = async () => {
            const fetchedPost: Post | null = await fetchPostById(id);
            setPost(fetchedPost);
        };
        getPost();
    }, [id]);

    if (!post) {    
        return <div>Loading...</div>;
    }

    return (
        <div>
            <PostDetails/>
        </div>
    );
};

export default PostPage;