import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from '../../pages/login';

const Navigation = () => {
    return (
       <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
        </Switch>
       </BrowserRouter>
    )
}

export default Navigation;
