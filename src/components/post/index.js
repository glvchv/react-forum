import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { Link, useHistory } from 'react-router-dom';
import { deletePost } from '../../services/postService';

const Post = ({ post, likes, hasLiked, handleClick }) => {
    const [isAuth, setIsAuth] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (post.author._id === localStorage.getItem('userId')) {
            setIsAuth(true);
        }
    }, [post.author._id]);

    const deleteHandler = async () => {
        await deletePost(post._id);
        history.push('/');
    }

    return (
        <div className={styles['post-body']}>
            <div className={styles['post-details']}>
                <img className={styles.avatar} src={post.author.avatarUrl || process.env.PUBLIC_URL + '/default.png'} alt="avatar" />
                <p><Link to={`/profile/${post.author._id}`}>{post.author.username}</Link></p>
                <small>{new Date(post.date).toLocaleString()}</small>
            </div>
            <div className={styles.main}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.text}>
                    {post.text}
                </p>
                <hr />
                <div className={styles.actions}>
                    <p>{likes} <small>likes</small></p>
                    <p><small>Category:</small>{post.category}</p>
                    <p>{post.replies.length} <small>replies</small></p>

                    {isAuth ? (<span className={styles.buttons}>
                        <button className={styles.delete} onClick={deleteHandler}>Delete</button></span>)

                        : (<span className={styles.like}>
                            <button disabled={hasLiked} onClick={handleClick}>💙</button></span>
                        )}
                </div>
            </div>
        </div>
    )

}

export default Post;