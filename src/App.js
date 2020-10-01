import React from 'react';

import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

// Import Routes all
import { userRoutes } from './routes/allRoutes';

// Import all middleware
import Authmiddleware from './routes/middleware/Authmiddleware';

// Import scss
import './assets/scss/theme.scss';

import AppProvider from './hooks';

const App = (props) => {
    return (
        <>
            <Router>
                <AppProvider>
                    <Switch>
                        {userRoutes.map((route, idx) => (
                            <Authmiddleware
                                path={route.path}
                                pagename={route.pagename}
                                component={route.component}
                                key={idx}
                            />
                        ))}
                    </Switch>
                </AppProvider>
            </Router>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        layout: state.Layout,
    };
};

export default connect(mapStateToProps, null)(App);
