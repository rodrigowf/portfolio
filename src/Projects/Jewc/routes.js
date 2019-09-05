import React from 'react';
import loadable from '@loadable/component'

import DashboardIcon from "@material-ui/icons/Dashboard";

const Index = loadable(() => import('./pages/Index'));
const Jewc = loadable(() => import('./Projects/Jewc/Jewc'));

const routes = [
    {
        path: "/",
        label: 'Index',
        component: Index,
        icon: <DashboardIcon />,
        exact: true,
    },
    {
        path: "/proposta/",
        component: Index,
    },
    {
        path: "/sistemas/jewc",
        component: Jewc,
    },
];

export default routes