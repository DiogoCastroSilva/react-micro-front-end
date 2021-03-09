import React, { useRef, useEffect } from 'react';

// Libraries
import { useHistory } from 'react-router-dom';

// Components
import { mount } from 'marketing/App';


export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathName }) => {
                const { pathname } = history.location;

                if (pathname !== nextPathName) {
                    history.push(nextPathName);
                }
            }
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />
};