import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header';
import Progress from './components/Progress';

// Lazy components
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));


export default () => {
    const [isSignIn, setIsSignIn] = useState(false);


    return (
        <BrowserRouter>
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
                        <Route path='/' component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};