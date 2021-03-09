import React from 'react';

// Libraries
import {
    Switch,
    Route,
    Router
} from 'react-router-dom';
import {
    StylesProvider,
    createGenerateClassName
} from '@material-ui/core/styles';

// Components
import SignIn from './components/Signin';
import SignUp from './components/Signup';



const generateClassName = createGenerateClassName({
    productionPrefix: 'auh',
  });

export default ({ history, onSignIn }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
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