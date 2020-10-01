import React from 'react';

// Redux
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// actions
import { loginUser, apiError } from '../../store/actions';

const Login = (props) => {
    // handleValidSubmit
    function handleValidSubmit(event, values) {
        props.loginUser(values, props.history);
    }

    return <h2>Login Page</h2>;
};

const mapStatetoProps = (state) => {
    const { error } = state.Login;
    return { error };
};

export default withRouter(
    connect(mapStatetoProps, { loginUser, apiError })(Login),
);
