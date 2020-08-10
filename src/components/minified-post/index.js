import React, { useContext } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import authContext from '../../context/authContext';

const Minified = ({post}) => {
    const context = useContext(authContext);

    return (
        <div className={styles['post-body']}>
            <div className={styles['post-details']}>
                {context.user ? 
                (<img className={styles.avatar} src={post.author.avatarUrl || process.env.PUBLIC_URL + '/default.png'}
                 alt='avatar'/>) :
                (<img className={styles.avatar} src={process.env.PUBLIC_URL + '/default.png'} alt='avatar'/> )}
                <p>{post.author.username}</p>
                <small>{new Date(post.date).toLocaleString()}</small>
            </div>
            <div className={styles.main}>
                {context.user ?
                ( <h2><Link className={styles.title} to={`/posts/${post._id}`}>{post.title}</Link></h2>)
                : (<h2 className={styles.title}>{post.title}</h2>)}
               
                <p className={styles.text}>
                    {`${post.text.substring(0, 70)}...`}
                </p>
                <hr />
                <div className={styles.actions}>
                    <p>{post.likes.length} <small>likes</small></p>
                    <p><small>{post.category}</small></p>
                    <p>{post.replies.length} <small>replies</small></p>
                </div>
            </div>
        </div>
    )
}

export default Minified;