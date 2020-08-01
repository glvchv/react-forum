import React from 'react';
import { loginUser } from '../../services/userService';

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
        const {username, password} = this.state;
        loginUser(username, password);
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label>Username: {this.state.username}</label>
                <input type="text" name="username" onChange={this.setUsername}/>
                <label>Password: {this.state.password}</label>
                <input type="password" name="password" onChange={this.setPassword}/>
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login