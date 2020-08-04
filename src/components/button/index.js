import React from 'react';
import styles from './index.module.css';

const Button = (props) => {
    return (
        <button className={`${styles.button}  ${styles[props.type]}`}>{props.text}</button>
    )
}

export default Button;