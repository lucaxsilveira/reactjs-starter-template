import React from 'react';
import { Redirect } from 'react-router-dom';

// // Authentication related pages
// import Login from '../pages/Authentication/Login';

const userRoutes = [
    // this route should be at the end of all other routes
    { path: '/', exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes = [
    // { path: '/logout', component: Logout },
];

export { userRoutes, authRoutes };
