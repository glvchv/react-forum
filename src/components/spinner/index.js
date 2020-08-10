import React from 'react';
import styles from './index.module.css';

const Spinner = () => {

    return (
        <div className={styles.container}>
            <img className={styles.gif} src={process.env.PUBLIC_URL + '/spinner.gif'} alt='loading...'/>
        </div>
    )
} 

export default Spinner;