import React from 'react';
import styles from './index.module.css';

const Post = (props) => {
    return (
        <div className={styles['post-body']}>
            <div className={styles['post-details']}>
                <img src="https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/03/avatar-publicity_still-h_2019.jpg" alt="avatar" />
                <p>Name</p>
                <p>username</p>
                <p>date</p>
            </div>
            <div className={styles.main}>
                <h2 className={styles.title}>Title</h2>
                <p className={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

export default Post;