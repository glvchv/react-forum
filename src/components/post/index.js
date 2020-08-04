import React from 'react';
import styles from './index.module.css';

const Post = (props) => {
    return (
        <div className={styles['post-body']}>
            <div className={styles['post-details']}>
                <img src="https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/03/avatar-publicity_still-h_2019.jpg" alt="avatar" />
                <p>{props.author.username}</p>
                <small>{new Date(props.date).toLocaleString()}</small>
           </div>
            <div className={styles.main}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.text}>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Post;