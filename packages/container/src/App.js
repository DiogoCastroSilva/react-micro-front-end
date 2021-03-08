import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';


export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path='/auth' component={AuthApp} />
                    <Route path='/' component={MarketingApp} />
                </Switch>
                <MarketingApp />
            </div>
        </BrowserRouter>
    );
};