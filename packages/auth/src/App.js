import React from 'react';

import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

// Components
import SignIn from './components/Signin';
import SigUp from './components/Signup';
import SignUp from './components/Signup';


export default ({ history, onSignIn }) => {
    return (
        <div>
            <StylesProvider>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin">
                            <SignIn onSignIn={onSignIn} />
                        </Route>
                        <Route path="/auth/signup">
                            <SignUp onSignIn={onSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};