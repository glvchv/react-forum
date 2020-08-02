import React from 'react';
import { loginUser } from '../../services/userService';
import styles from './index.module.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    setUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    setPassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    submitHandler(e) {
        e.preventDefault();
        const { username, password } = this.state;
        loginUser(username, password);
    }

    render() {
        return (
            <div className={styles["login-page"]}>
                <div className={styles.form}>
                    <h1 className={styles.title}>Log in</h1>
                    <form className={styles["login-form"]} onSubmit={this.submitHandler}>
                        <label className={styles.label}>Username:</label>
                        <input type="text" placeholder="johndoe89" onChange={this.setUsername} />
                        <label className={styles.label}>Password:</label>
                        <input type="password" placeholder="********" onChange={this.setPassword}/>
                        <button type="submit">login</button>
                        <p className={styles.message}>Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login