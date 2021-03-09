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
import Landing from './components/Landing';
import Pricing from './components/Pricing';


const generateClassName = createGenerateClassName({
    productionPrefix: 'mark',
});

export default ({ history }) => {
    return (
        <div>
            <StylesProvider createGenerateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};