import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';


export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    );
};