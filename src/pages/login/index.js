import React, { Fragment } from 'react';
import Login from '../../components/login';
import Header from '../../components/header';

class LoginPage extends React.Component {

    render() {
        return (
            <Fragment>
                <Header />
                <Login />
            </Fragment>
        )
    }
}

export default LoginPage;