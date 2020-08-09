import React, { useState, Fragment, useEffect, useContext } from 'react';
import styles from './index.module.css';
import authContext from '../../context/authContext';
import { withRouter, useHistory } from 'react-router-dom';
import { dispatchSuccess } from '../../utils/setNotification';

const UserInfo = ( props ) => {
    const [isOwn, setIsOwn] = useState(false);
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

    return (
        <div className={styles.wrapper}>
            <div className={styles['avatar-section']}>
                <img src={user.avatarUrl || process.env.PUBLIC_URL + '/default.png'} className={styles.avatar} />
                {isOwn ?
                    (<Fragment>
                        <input type='file' />
                        <button className={styles['upload-btn']}>Upload</button>
                    </Fragment>)
                    : ''
                }
                <button className={styles.logout} onClick={handleLogout}>Logout</button>
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

export default withRouter(UserInfo);