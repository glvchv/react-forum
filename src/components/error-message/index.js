import React from 'react';
import styles from './index.module.css';

const ErrorMessage = (props) => {
    return (
    <p className={styles.error}>{props.error}</p>
    )
} 

export default ErrorMessage;