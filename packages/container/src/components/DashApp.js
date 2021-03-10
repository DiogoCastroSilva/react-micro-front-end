import React, { useRef, useEffect } from 'react';

// Components
import { mount } from 'dash/App';


export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref} />
};