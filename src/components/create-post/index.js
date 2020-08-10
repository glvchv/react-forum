import React, { useState } from 'react';
import styles from './index.module.css';
import ErrorMessage from '../error-message';
import { createPost } from '../../services/postService';
import { withRouter } from 'react-router-dom';
import { dispatchError, dispatchSuccess } from '../../utils/setNotification';

const CreatePost = (props) => {
    const options = [
        { value: 'sports', label: 'Sports' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'education', label: 'Education' },
        { value: 'technology', label: 'Technology' },
        { value: 'other', label: 'Other' }
    ];
    let isInvalid = true;

    const [category, setCategory] = useState('entertainment');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [titleError, setTitleError] = useState('');
    const [textError, setTextError] = useState('');

    const selectCategory = (e) => {
        setCategory(e.target.value);
    };

    const validateTitle = (e) => {
        e.target.value.length < 20 ?
            setTitleError('Title must be atleast 20 characters long!')
            : setTitleError('');
    };

    const validateText = (e) => {
        e.target.value.length < 50 ?
            setTextError('Text area must be atleast 50 characters long!')
            : setTextError('');
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
        validateTitle(e);
    };

    const handleText = (e) => {
        setText(e.target.value);
        validateText(e);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        await createPost(title, text, category,
            (msg) => {
                props.history.push('/');
                dispatchSuccess(msg)
            }
        );  
    };

    if (title !== '' && titleError === '' && text !== '' && textError === '') {
        isInvalid = false;
    } else {
        isInvalid = true;
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <h1 className={styles.title}>What's on your mind?</h1>
                <form className={styles.form} onSubmit={submitHandler}>
                    <label className={styles.label}>Post title:</label>
                    <input type="text" placeholder="e.g. What do you think about ...?" onChange={handleTitle} />
                    <ErrorMessage error={titleError} />
                    <textarea className={styles.text} onChange={handleText} />
                    <ErrorMessage error={textError} />
                    <label className={styles.label}>Category:</label>
                    <select value={category} className={styles.options} onChange={selectCategory}>
                        {options.map((o, i) => (
                            <option key={i} value={o.value}>{o.label}</option>
                        ))}
                    </select>
                    <button type="submit" disabled={isInvalid}>Post</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(CreatePost);