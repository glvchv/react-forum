import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from '../../pages/login';
import Home from '../../pages/home';
import Register from '../../pages/register';

const Navigation = () => {
    return (
       <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>
       </BrowserRouter>
    )
}

export default Navigation;
