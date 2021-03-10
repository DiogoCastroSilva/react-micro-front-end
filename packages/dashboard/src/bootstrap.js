import { createApp } from 'vue';

// Components
import Dashboard from './components/Dashboard.vue';


// Mount function
const mount = (element) => {
   const app = createApp(Dashboard);
   app.mount(element);
};

// Development
// Starts runs mount in this port
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#dash-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

// Production
// Mount will be run by the container
export { mount };