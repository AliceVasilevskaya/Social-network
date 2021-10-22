import {GetItemsType} from '../types/types'
import {ApiResponseType, instance} from './api'


export let usersAPI = {
    getUsers(currentPage = 3, pageSize = 10, term = '', friend: null | boolean = null) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`+(friend === null? '': `&friend=${friend}`))
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<ApiResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data) as Promise<ApiResponseType>
    }
};