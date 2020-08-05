import React, { useState, useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import authContext from '../../context/authContext';
import styles from './index.module.css';
import { registerUser } from '../../services/userService';
import ErrorMessage from '../error-message';

const RegisterForm = (props) => {
    const context = useContext(authContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [userError, setUserError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const userHandler = (e) => {
        setUsername(e.target.value);
        validateUser(e);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        validatePassword(e);
    }

    const rePasswordHandler = (e) => {
        setRePassword(e.target.value);
        validateRePassword(e);
    }

    const validateUser = (e) => {
        if (e.target.value.length < 4 || e.target.value === '') {
            setUserError('Username must be atleast 4 characters long!')
        } else {
            setUserError('')
        }
    }

    const validatePassword = (e) => {
        if (e.target.value.length < 6 || e.target.value === '') {
            setPasswordError('Password must be atleast 6 characters!')
        } else {
            setPasswordError('')
        }
    }

    const validateRePassword = (e) => {
        if (e.target.value === '') {
            setPasswordError('This field cannot be empty!');
        } else if (password !== e.target.value) {
            setPasswordError('Passwords must match!');
        } 
        else {
            setPasswordError('')
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        registerUser(username, password,
            (user) => {
                context.logIn(user);
                props.history.push('/');
            }, (e) => {
                console.log(e)
            });
    }

    const isInvalid = userError !== '' || passwordError !== '' ? true : false;
    return (
        <div className={styles["login-page"]}>
            <div className={styles.form}>
                <h1 className={styles.title}>Sign up</h1>
                <form className={styles["login-form"]} onSubmit={submitHandler}>
                    <label className={styles.label}>Username:</label>
                    <input type="text" placeholder="johndoe89" onChange={userHandler} />
                    <ErrorMessage error={userError} />
                    <label className={styles.label}>Password:</label>
                    <input type="password" placeholder="********" onChange={passwordHandler} />
                    <label className={styles.label}>Repeat password:</label>
                    <input type="password" placeholder="********" onChange={rePasswordHandler} />
                    <ErrorMessage error={passwordError} />
                    <button type="submit" disabled={isInvalid}>register</button>
                    <p className={styles.message}>Already registered? <Link to={'/login'}>Sign in</Link></p>
                </form>
            </div>
        </div>
    )
}

export default withRouter(RegisterForm);