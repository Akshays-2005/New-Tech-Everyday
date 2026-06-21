import { useState } from 'react';
import axios from 'axios';

const PostForm = () => {

    const [userId, setUserId] = useState('UserId');
    const [title, setTitle] = useState('Title');
    const [body, setBody] = useState('Body');

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        if (name === 'userId') {
            setUserId(value);
        } else if (name === 'title') {
            setTitle(value);
        } else if (name === 'body') {
            setBody(value);
        }
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log({ userId, title, body });
        axios.post('https://jsonplaceholder.typicode.com/posts', { userId, title, body })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error('Error submitting post:', error);
            });
    }

    return (
        <div className="post-form">
            <h2>Create New Post</h2>
            <form onSubmit={SubmitHandler}>
                <div><input type="text" name="userId" value={userId} onChange={onChangeHandler} /></div>
                <div><input type="text" name="title" value={title} onChange={onChangeHandler} /></div>
                <div><input type="text" name="body" value={body} onChange={onChangeHandler} /></div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostForm;