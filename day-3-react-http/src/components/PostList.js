import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const PostList = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data);
            })
            .catch(err => {
                console.error(err)
                setError(err);
            });
    }, []);

    return (
        <div className="post-list">
            List of Posts
            {posts && posts.map(post => <div key={post.id}>{post.title}</div>)}
            {error && <div className="error">{error.message}</div>}
        </div>
    );
}

export default PostList;