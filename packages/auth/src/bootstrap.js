import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';



// Mount function
const mount = (element, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDom.render(
        <App history={history} />,
        element
    );

    return {
        onParentNavigate({ pathname: nextPathName }) {
            const { pathname } = history.location;

            if (pathname !== nextPathName) {
                history.push(nextPathName);
            }
        }
    };
};

// Development
// Starts runs mount in this port
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#auth-dev-root');

    if (devRoot) {
        mount(devRoot, {
            defaultHistory: createBrowserHistory()
        });
    }
}

// Production
// Mount will be run by the container
export { mount };