import React from 'react';
import { Redirect } from 'react-router-dom';

// // Authentication related pages
import Login from '../pages/Authentication/Login';

const userRoutes = [
    { path: '/Login', component: Login },
    // this route should be at the end of all other routes
    { path: '/', exact: true, component: () => <Redirect to="/login" /> },
];

const authRoutes = [{ path: '/Login', component: Login }];

export { userRoutes, authRoutes };
