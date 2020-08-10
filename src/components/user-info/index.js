import React, { useState, Fragment, useEffect, useContext } from 'react';
import styles from './index.module.css';
import authContext from '../../context/authContext';
import { withRouter, useHistory } from 'react-router-dom';
import { dispatchSuccess } from '../../utils/setNotification';
import { updateAvatar } from '../../services/userService';
import Minified from '../minified-post';

const UserInfo = (props) => {
    const [isOwn, setIsOwn] = useState(false);
    const [url, setUrl] = useState('');
    const context = useContext(authContext);
    const { user } = props;
    const history = useHistory();

    useEffect(() => {
        const loggedUser = localStorage.getItem('userId');
        loggedUser === user._id ? setIsOwn(true) : setIsOwn(false);
    }, [user._id])

    const handleLogout = () => {
        history.push('/');
        context.logOut();
        dispatchSuccess('Successfully logged out!');
    }

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    }

    const handleAvatarUrl = async () => {
        await updateAvatar(url);
        window.location.reload(true);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles['avatar-section']}>
                <img src={user.avatarUrl || process.env.PUBLIC_URL + '/default.png'} className={styles.avatar} alt='avatar'/>
                {isOwn ?
                    (<Fragment>
                        <input type='text' placeholder='Add your avatar url here...' onChange={handleUrlChange} />
                        <button className={styles['upload-btn']} onClick={handleAvatarUrl}>Upload</button>
                        <button className={styles.logout} onClick={handleLogout}>Logout</button>
                    </Fragment>)
                    : ''
                }

            </div>
            <div className={styles['personal-section']}>
                <div className={styles.leftside}>
                    <p><small>Username: </small>{user.username}</p>
                </div>
                <div className={styles.rightside}>
                    <p><small>Posted: </small>{user.posts.length} times</p>
                </div>
            </div>
            <h1 className={styles.centered}>Posts: </h1>
            <div className={styles['posts-wrapper']}>
                {user.posts.length === 0 ? (<p className={styles.centered}>None...</p>) :
                    user.posts.map((p, i) => (
                        <Minified key={i} post={p} />
                    ))
                }
            </div>
        </div>
    )
}

export default withRouter(UserInfo);