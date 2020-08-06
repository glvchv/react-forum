import React from 'react';
import styles from './index.module.css';

const Minified = ({post}) => {

    return (
        <div className={styles['post-body']}>
            <div className={styles['post-details']}>
                <img className={styles.avatar} src="https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/03/avatar-publicity_still-h_2019.jpg" alt="avatar" />
                <p>{post.author.username}</p>
                <small>{new Date(post.date).toLocaleString()}</small>
            </div>
            <div className={styles.main}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.text}>
                    {`${post.text.substring(0, 70)}...`}
                </p>
                <hr />
                <div className={styles.actions}>
                    <p>{post.likes.length} <small>likes</small></p>
                    <p>{post.replies.length} <small>replies</small></p>
                </div>
            </div>
        </div>
    )
}

export default Minified;