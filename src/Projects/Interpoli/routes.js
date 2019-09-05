import React from 'react';
import loadable from '@loadable/component'

import DashboardIcon from "@material-ui/icons/Dashboard";

const Index = loadable(() => import('./index_html/Index'));


const routes = [
    {
        path: "/sistemas/jewc/",
        label: 'Index',
        component: Index,
        icon: <DashboardIcon />,
        exact: true,
    },
];

export default routes