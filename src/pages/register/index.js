import React, { Fragment } from 'react';
import RegisterForm from '../../components/register-form';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Register = (props) => {

    return (
        <Fragment>
            <Header />
            <RegisterForm />
            <Footer />
        </Fragment>
    )
}

export default Register;