import React, { lazy, Suspense, useState, useEffect } from 'react';

// Libraries
import {
    StylesProvider,
    createGenerateClassName
} from '@material-ui/styles';
import {
    Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Components
import Header from './components/Header';
import Progress from './components/Progress';

// Lazy components
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashLazy = lazy(() => import('./components/DashApp'));



const generateClassName = createGenerateClassName({
    productionPrefix: 'con',
});

const history = createBrowserHistory();

export default () => {
    const [isSignIn, setIsSignIn] = useState(false);

    useEffect(() => {
        if (isSignIn) {
            history.push('/dashboard');
        }
    }, [isSignIn]);

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header
                        isSignedIn={isSignIn}
                        onSignOut={() => setIsSignIn(false)}
                    />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path='/auth'>
                                <AuthLazy onSignIn={() => setIsSignIn(true) } />
                            </Route>
                            <Route path='/dashboard'>
                                {!isSignIn && <Redirect to='/' />}
                                <DashLazy />
                            </Route>
                            <Route path='/' component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    );
};