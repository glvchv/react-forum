import React from 'react';
import styles from './index.module.css';
import Button from '../button';

const Post = ({ post }) => {
    return (
        <div className={styles['post-body']}>
            <div className={styles['post-details']}>
                <img src="https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/03/avatar-publicity_still-h_2019.jpg" alt="avatar" />
                <p>{post.author.username}</p>
                <small>{new Date(post.date).toLocaleString()}</small>
            </div>
            <div className={styles.main}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.text}>
                    {post.text}
                </p>
                <hr />
                <div className={styles.actions}>
                    <p>{post.likes.length} <small>likes</small></p>
                    <p>{post.replies.length} <small>replies</small></p>
                    <span className={styles.buttons}>
                        <Button link={'/edit'} type={"edit"} text={"Edit"}/>
                        <Button link={'/delete'} type={"delete"} text={"Delete"}/>
                        <Button link={'/like'} type={"default"} text={"Like"}/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post;