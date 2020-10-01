import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from './actionTypes';
import { loginSuccess, logoutUserSuccess, apiError } from './actions';

function* loginUser({ payload: { user, history } }) {
    try {
        localStorage.setItem('authUser', JSON.stringify('logged'));
        yield put(loginSuccess('logged'));

        history.push('/dashboard');
    } catch (error) {
        yield put(apiError(error));
    }
}

function* logoutUser({ payload: { history } }) {
    try {
        localStorage.removeItem('authUser');

        if (process.env.REACT_APP_DEFAULTAUTH === 'firebase') {
            localStorage.setItem('authUser', false);
            const response = 'ok';

            yield put(logoutUserSuccess(response));
        }
        history.push('/login');
    } catch (error) {
        yield put(apiError(error));
    }
}

export function* watchUserLogin() {
    yield takeEvery(LOGIN_USER, loginUser);
}

export function* watchUserLogout() {
    yield takeEvery(LOGOUT_USER, logoutUser);
}

function* authSaga() {
    yield all([fork(watchUserLogin), fork(watchUserLogout)]);
}

export default authSaga;
