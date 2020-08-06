import React, { useContext } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from '../../pages/login';
import Home from '../../pages/home';
import Register from '../../pages/register';
import GuestPage from '../../pages/guest-home';
import authContext from '../../context/authContext';

const Navigation = () => {
    const context = useContext(authContext);

    return (
       <BrowserRouter>
        <Switch>
            <Route path="/" exact component={context.user ? Home : GuestPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/guest" component={GuestPage} />
        </Switch>
       </BrowserRouter>
    )
}

export default Navigation;
