import {GetItemsType} from '../types/types'
import {instance} from './api'



export let usersAPI = {
    getUsers(currentPage = 3, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data) as Promise<ResponseType>
    }
};