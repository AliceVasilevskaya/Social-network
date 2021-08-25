import {authApi} from '../api';
import {stopSubmit} from 'redux-form';

const SET_AUTH_USER_DATA = 'social-network/auth/SET-AUTH-USER-DATA';
const initialState = {
    login: null,
    id: null,
    email: null,
    isAuth: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, email, login, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {
    const response = await authApi.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        const message = response.data.messages.length > 0 ?
            response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
    const response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;