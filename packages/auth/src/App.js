import React from 'react';

import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

// Components
import SignIn from './components/Signin';
import SigUp from './components/Signup';


export default ({ history }) => {
    return (
        <div>
            <StylesProvider>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin" component={SignIn} />
                        <Route path="/auth/signup" component={SigUp} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};