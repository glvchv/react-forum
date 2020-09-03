import React, { useContext, Suspense } from 'react';
import { Route, Switch, BrowserRouter, Redirect, } from 'react-router-dom';
import authContext from '../../context/authContext';
import Login from '../../pages/login';
import Home from '../../pages/home';
import Register from '../../pages/register';
import GuestPage from '../../pages/guest-home';
import Post from '../../pages/post';
import Profile from '../../pages/profile';
import Spinner from '../spinner';
import NotFound from '../not-found';

const Navigation = () => {
    const context = useContext(authContext);
    const RulesComponent = React.lazy(() => import('../../pages/rules'));
    const CreatePostPage = React.lazy(() => import('../../pages/create-post-page'));

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact render={() => (context.user ? (<Home />) : (<Redirect to='/guest' />))} />
                <Route path='/guest' render={() => (!context.user ? (<GuestPage />) : (<Redirect to='/' />))} />
                <Route path='/login' component={context.user ? Home : Login} />
                <Route path='/register' component={context.user ? Home : Register} />
                <Route path='/posts/:id' component={context.user ? Post : Login} />
                <Route path='/profile/:id' component={context.user ? Profile : Login} />
                <Route path='/create-post' render={() =>
                    <Suspense fallback={<Spinner />}>
                        {context.user ? (<CreatePostPage />) : (<Redirect to='/login' />)}
                    </Suspense>}
                />
                <Route path='/rules' render={() =>
                    <Suspense fallback={<Spinner/>}>
                        <RulesComponent />
                    </Suspense>
                }
                />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;
