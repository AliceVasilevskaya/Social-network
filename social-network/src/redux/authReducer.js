import {authApi, securityApi} from '../api';
import {stopSubmit} from 'redux-form';

const SET_AUTH_USER_DATA = 'social-network/auth/SET-AUTH-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS';
const initialState = {
    login: null,
    id: null,
    email: null,
    isAuth: false,
    captchaUrl: null   //if null, then captcha is not required
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});


export const getAuthUserData = () => async (dispatch) => {
    const response = await authApi.me()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    try {
        const response = await authApi.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            const message = response.data.messages.length > 0 ?
                response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}))
        }
    } catch (e) {
        console.log(e.message)
    }
}
export const logout = () => async (dispatch) => {
    try {
        const response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    } catch (e) {
        console.log(e.message)
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    try {
        const response = await securityApi.getCaptchaUrl();
        dispatch(getCaptchaUrlSuccess(response.data.url));
    } catch (e) {
        console.log(e.message);
    }
}

export default authReducer;