import React, { useContext, Suspense } from 'react';
import { Route, Switch, BrowserRouter, Redirect, } from 'react-router-dom';
import Login from '../../pages/login';
import Home from '../../pages/home';
import Register from '../../pages/register';
import GuestPage from '../../pages/guest-home';
import authContext from '../../context/authContext';
import Post from '../../pages/post';
import Profile from '../../pages/profile';
import Spinner from '../spinner';

const Navigation = () => {
    const context = useContext(authContext);
    const RulesComponent = React.lazy(() => import('../../pages/rules'));
    const CreatePostPage = React.lazy(() => import('../../pages/create-post-page'));

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact render={() => (context.user ? (<Home />) : (<Redirect to='/guest' />))} />
                <Route path='/guest' render={() => (!context.user ? (<GuestPage />) : (<Redirect to='/' />))} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/guest' component={GuestPage} />
                <Route path='/posts/:id' component={Post} />
                <Route path='/profile/:id' component={Profile} />
                <Suspense fallback={<Spinner />}>
                    <Route path='/create-post' component={CreatePostPage} />
                    <Route path='/rules' component={RulesComponent} />
                </Suspense>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;
