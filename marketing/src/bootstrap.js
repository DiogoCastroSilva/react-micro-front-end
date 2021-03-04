import React from 'react';
import ReactDom from 'react-dom';

import App from './App';



// Mount function
const mount = (element) => {
    ReactDom.render(
        <App />,
        element
    );
};

// Development
// Starts runs mount in this port
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#marketing-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// Production
// Mount will be run by the container
export { mount };