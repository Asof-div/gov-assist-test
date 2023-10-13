

import { DefaultLayout } from '../layouts/DefaultLayout';
import Home from './Home';
import GettingStarted from './GettingStarted';

const routes = [
    {
        path: "/",
        component: Home,
        exact: true,
        auth: false,
        layout: DefaultLayout,
    },
    {
        path: "/getting-started",
        component: GettingStarted,
        exact: true,
        auth: false,
        layout: DefaultLayout,
    },
];

export default routes;