import React, { useEffect, useState, Fragment } from 'react';
import styles from './index.module.css';
import { getProfile } from '../../services/userService';
import { likeReply } from '../../services/postService';
import Spinner from '../spinner';
import { getCookie } from '../../utils/getCookie';
import { Link } from 'react-router-dom';

const Reply = ({ data }) => {
    const authorId = data.author;
    const [authorInfo, setAuhtorInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasLiked, setHasLiked] = useState(false);
    const [likes, setLikes] = useState(null);

    useEffect(() => {
        async function getAuhtorInfo() {
            const token = getCookie('x-auth-token');
            const userId = localStorage.getItem('userId');
            const userData = await getProfile(authorId, token);
            const alreadyLiked = data.likes.find(u => u == userId) === undefined ? false : true;
            setHasLiked(alreadyLiked);
            setAuhtorInfo(userData);
            setLikes(data.likes.length);
            setIsLoading(false);
        }
        getAuhtorInfo();

        return function updateLikes() {
            if (likes > data.likes.length) {
                likeReply(data._id);
            }
        }
    }, [authorId]);

    const handleClick = () => {
        setHasLiked(true);
        setLikes(likes + 1);
    }

    return (
        <Fragment>
            {isLoading ? (<Spinner />) :
                (<div className={styles.wrapper}>
                    <div className={styles['post-details']}>
                        <img className={styles.avatar} src={authorInfo.avatarUrl || process.env.PUBLIC_URL + '/default.png'} />
                        <p><Link to={`/profile/${authorInfo._id}`}>{authorInfo.username}</Link></p>
                        <small>{new Date(data.date).toLocaleString()}</small>
                    </div>
                    <div className={styles.main}>

                        <p className={styles.text}>
                            {data.text}
                        </p>
                        <hr />
                        <div className={styles.actions}>
                            <p>{likes} <small>likes</small></p>
                            <button disabled={hasLiked} onClick={handleClick}>💙</button>
                        </div>
                    </div>
                </div>)
            }
        </Fragment>
    )
}

export default Reply;