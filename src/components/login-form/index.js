import React from 'react';
import { loginUser } from '../../services/userService';
import styles from './index.module.css';
import authContext from '../../context/authContext';
import { withRouter } from 'react-router-dom';
import ErrorMessage from '../error-message';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            userError: '',
            passwordError: ''
        }
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    static contextType = authContext;

    setUsername(e) {
        this.setState({
            username: e.target.value
        });
        this.validateUser(e);
    }
    setPassword(e) {
        this.setState({
            password: e.target.value
        });
        this.validatePassword(e)
    }

    validateUser = (e) => {
        if (e.target.value.length < 4 || e.target.value === '') {
            this.setState({
                userError: 'Username must be atleast 4 characters long!'
            })
        } else {
            this.setState({
                userError: ''
            })
        }
    }

    validatePassword = (e) => {
        if (e.target.value.length < 6 || e.target.value === '') {
            this.setState({
                passwordError: 'Password must be atleast 6 characters long!'
            })
        } else {
            this.setState({
                passwordError: ''
            })
        }
    }

    submitHandler(e) {
        e.preventDefault();
        const { username, password } = this.state;
        loginUser(username, password,
            (user) => {
                this.context.logIn(user);
                this.props.history.push('/');
            }, (e) => {
                console.log(e)
            });
    }

    render() {
        const isInvalid = this.state.userError !== '' || this.state.passwordError !== '' ? true : false;
        return (
            <div className={styles["login-page"]}>
                <div className={styles.form}>
                    <h1 className={styles.title}>Log in</h1>
                    <form className={styles["login-form"]} onSubmit={this.submitHandler}>
                        <label className={styles.label}>Username:</label>
                        <input type="text" placeholder="johndoe89" onChange={this.setUsername}/>
                        <ErrorMessage error={this.state.userError} />
                        <label className={styles.label}>Password:</label>
                        <input type="password" placeholder="********" onChange={this.setPassword}/>
                        <ErrorMessage error={this.state.passwordError} />
                        <button type="submit" disabled={isInvalid}>login</button>
                        <p className={styles.message}>Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);