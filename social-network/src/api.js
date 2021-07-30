
import * as axios from "axios";

let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers:{ 'API-KEY': '3583873e-cb34-4207-bcd8-c53e20271831'}
})

export let usersAPI = {
    getUsers(currentPage = 3, pageSize =10) {
       return instance.get(`users?page=${currentPage}&count=${pageSize}`)
           .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId){
       return instance.delete(`follow/${userId}`)
           .then(response => response.data)
    }
};
export let profileApi = {
    getProfile(userId) {
        return instance.get(`profile/`+ userId)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+ userId)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`,{status: status})
            .then(response => response.data);

    }



}
export let authApi = {
    me() {
        return instance.get(`auth/me`);
    }
}
