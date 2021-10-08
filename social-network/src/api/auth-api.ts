import {instance, ApiResponseType, ResultCodesEnum} from './api'

type LoginResponseDataType = { id: number }
type MeResponseDataType = {id: number, email: string, login: string}

export let authApi = {
    me() {
        return instance.get<ApiResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe = false , captcha: null | string = null) {
        return instance.post<ApiResponseType<LoginResponseDataType, ResultCodesEnum>>('auth/login',
            {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete('auth/login').then(res => res.data)
    }
}