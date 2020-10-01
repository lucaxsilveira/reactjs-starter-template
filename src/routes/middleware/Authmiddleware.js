import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Authmiddleware = ({ component: Component, pagename }) => (
    <Route
        render={(props) => {
            // here you can apply condition
            if (!localStorage.getItem('authUser')) {
                return (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                );
            }

            return <Component {...props} />;
        }}
    />
);

export default withRouter(Authmiddleware);
