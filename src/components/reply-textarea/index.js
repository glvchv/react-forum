import React, { useState } from 'react';
import styles from './index.module.css';
import ErrorMessage from '../error-message';

const ReplyTextArea = (props) => {
    const [text, setText] = useState('');
    const [textError, setTextError] = useState('');
    const [isInvalid, setIsInvalid] = useState(true);
    
    const validateText = (e) => {
        if (e.target.value.length < 10) {
            setTextError('Reply must be atleast 10 characters long!')
            setIsInvalid(true);
        } else {
            setTextError('');
            setIsInvalid(false);
        }
    };
    const handleChange = (e) => {
        setText(e.target.value);
        validateText(e);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <h1 className={styles.title}>Reply</h1>
                <form className={styles.form} onSubmit={(e) => props.handleReplyClick(e, text)}>
                    <textarea className={styles.text} id='reply-text-area' onChange={handleChange}/>
                    <ErrorMessage error={textError}/>
                    <button type="submit" disabled={isInvalid}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ReplyTextArea