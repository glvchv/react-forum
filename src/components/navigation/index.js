import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from '../../pages/login';
import Home from '../../pages/home';

const Navigation = () => {
    return (
       <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
       </BrowserRouter>
    )
}

export default Navigation;
