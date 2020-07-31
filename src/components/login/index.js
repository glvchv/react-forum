import React from 'react';

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
        fetch('http://localhost:175/api/user/login',
            {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {
                  'Content-Type': 'application/json'
                }
        })
        .then(res => res.json())
        .then(data => console.log(data.message))
        .catch(err => console.log('Error 123', err.message));
        
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label for="username">Username: {this.state.username}</label>
                <input type="text" name="username" onChange={this.setUsername}/>
                <label for="password">Password: {this.state.password}</label>
                <input type="password" name="password" onChange={this.setPassword}/>
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login