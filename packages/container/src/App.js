import React, { lazy, Suspense, useState } from 'react';

// Libraries
import {
    StylesProvider,
    createGenerateClassName
} from '@material-ui/styles';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

// Components
import Header from './components/Header';
import Progress from './components/Progress';

// Lazy components
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));


const generateClassName = createGenerateClassName({
    productionPrefix: 'con',
});

export default () => {
    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <BrowserRouter>
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
                            <Route path='/' component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};