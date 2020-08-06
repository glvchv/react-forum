import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.wrap}>
            <Link to={"/"} className={styles.forum}>Forum™</Link>
            <p>© 2020 - All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;