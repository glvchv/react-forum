import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import styles from './index.module.css';

const NotFound = () => {
    console.log('Not found inited');
    return (
        <Fragment>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.status}>404</h1>
                <h2 className={styles.msg}>Oops... Seems like this page does not exist!</h2>
                <Link to='/'><button className={styles.gbBtn}><b>Home</b></button></Link>
            </div>
            <Footer />
        </Fragment>
    )
};

export default NotFound;
