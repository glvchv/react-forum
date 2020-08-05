import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link className={styles.button} to={props.link} className={`${styles.button}  ${styles[props.type]}`}>{props.text}</Link>
    )
}

export default Button;