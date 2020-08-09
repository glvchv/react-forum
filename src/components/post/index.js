import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Button from '../button';
import Spinner from  '../spinner';
import  {Link } from 'react-router-dom';

const Post = ({ post, likes, hasLiked, handleClick }) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (post.author._id == localStorage.getItem('userId')) {
            setIsAuth(true);
        }
    }, []);
    
    return (
        <div className={styles['post-body']}>
            <div className={styles['post-details']}>
                <img className={styles.avatar} src="https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/03/avatar-publicity_still-h_2019.jpg" alt="avatar" />
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

                    {isAuth ? (<span className={styles.buttons}><Button link={'/edit'} type={"edit"} text={"Edit"} />
                        <Button link={'/delete'} type={"delete"} text={"Delete"} /></span>)

                        : (<span className={styles.like}>
                            <button disabled={hasLiked} onClick={handleClick}>💙</button></span>
                            )}
                </div>
            </div>
        </div>
    )

}

export default Post;