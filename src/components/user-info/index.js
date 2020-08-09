import React, { useState, Fragment, useEffect } from 'react';
import styles from './index.module.css';

const UserInfo = ({ user }) => {
    const [isOwn, setIsOwn] = useState(false);

    useEffect(() => {
        const loggedUser = localStorage.getItem('userId');
        loggedUser === user._id ? setIsOwn(true) : setIsOwn(false);
    }, [])


    return (
        <div className={styles.wrapper}>
            <div className={styles['avatar-section']}>
                <img src={process.env.PUBLIC_URL + '/default.png'} className={styles.avatar} />
                {isOwn ?
                    (<Fragment>
                        <input type='file' />
                        <button className={styles['upload-btn']}>Upload</button>
                    </Fragment>)
                    : ''
                }

            </div>
            <div className={styles['personal-section']}>
                <div className={styles.leftside}>
                    <p><small>Username: </small>{user.username}</p>
                    <p><small>Full name: </small>{user.fullname || 'Unknown'}</p>
                </div>
                <div className={styles.rightside}>
                    <p><small>Posted: </small>{user.posts.length} times</p>
                </div>
            </div>

        </div>
    )
}

export default UserInfo;