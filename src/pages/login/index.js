import React, { Fragment } from 'react';
import Login from '../../components/login-form';
import Header from '../../components/header';
import Footer from '../../components/footer';

class LoginPage extends React.Component {

    render() {
        return (
            <Fragment>
                <Header />
                <Login />
                <Footer />
            </Fragment>
        )
    }
}

export default LoginPage;