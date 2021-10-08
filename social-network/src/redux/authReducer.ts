//import {ResultCodesEnum, ResultCodesForCaptchaEnum} from '../api/api'
import {FormAction, stopSubmit} from 'redux-form'
import {BaseThunkType, InferActionTypes} from './redux-store'
import {authApi} from '../api/auth-api'
import {securityApi} from '../api/security-api'

const initialState = {
    login: null as null | string,
    id: null as null | number,
    email: null as null | string,
    isAuth: false,
    captchaUrl: null as null | string  //if null, then captcha is not required
}

const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'social-network/auth/SET_AUTH_USER_DATA':
        case 'social-network/auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const actions = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'social-network/auth/SET_AUTH_USER_DATA',
        payload: {id, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'social-network/auth/GET_CAPTCHA_URL_SUCCESS',
        payload: {captchaUrl}
    } as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const meData = await authApi.me()
    debugger;
    if (meData.resultCode === 0) {
        let {id, email, login} = meData.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
    async (dispatch) => {
        try {
            const loginData = await authApi.login(email, password, rememberMe, captcha)
            if (loginData.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                if (loginData.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }
                const message = loginData.messages.length > 0 ?
                    loginData.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        } catch (e: any) {
            console.log(e.message)
        }
    }
export const logout = (): ThunkType => async (dispatch) => {
    try {
        const logoutData = await authApi.logout()
        if (logoutData.resultCode === 0) {
            dispatch(actions.setAuthUserData(null, null, null, false))
        }
    } catch (e: any) {
        console.log(e.message)
    }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    try {
        const securityData = await securityApi.getCaptchaUrl()
        dispatch(actions.getCaptchaUrlSuccess(securityData.url))
    } catch (e: any) {
        console.log(e.message)
    }
}

export type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes | FormAction>

export default authReducer