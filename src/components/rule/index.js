import React from 'react';
import styles from './index.module.css';

const Rule = ({ title, text, index }) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{index}. {title}</h1>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Rule;