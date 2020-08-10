import React, { Fragment, useEffect, useState } from 'react';
import UserInfo from '../../components/user-info';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './index.module.css';
import { getProfile } from '../../services/userService';
import Spinner from '../../components/spinner';
import { getCookie } from '../../utils/getCookie';

const Profile = (props) => {
    const id = props.match.params.id;
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getUserInfo() {
            const token = getCookie('x-auth-token');
            const data = await getProfile(id, token);
            setUser(data);
            setIsLoading(false);
        }
        getUserInfo();
    }, [id]);

    return (
        <Fragment>
            <Header />
            <div className={styles.container}>
                {isLoading ? <Spinner />
                    : (<UserInfo user={user} />)
                }
            </div>
            <Footer />
        </Fragment>
    )
}

export default Profile;