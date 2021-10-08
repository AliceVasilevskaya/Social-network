import axios from 'axios'

export let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {'API-KEY': '3583873e-cb34-4207-bcd8-c53e20271831'}
})
export enum ResultCodesEnum{
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}
export type ApiResponseType<T = {}, RC = ResultCodesEnum > = {
    data: T
    resultCode: RC
    messages: Array<string>
}
