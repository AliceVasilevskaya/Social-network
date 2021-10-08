import {PhotosType, ProfileType} from '../types/types'
import {instance, ApiResponseType} from './api'

type SavePhotoDataType = {
    photos: PhotosType
}
export let profileApi = {
    getProfile(userId: number | null) {
        return instance.get<ProfileType>(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<ApiResponseType>(`profile/status`, {status: status})
            .then(response => response.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)          //add data to object FormData as key/value
        return instance.put<ApiResponseType<SavePhotoDataType>>(`profile/photo`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'   //
                }
            }).then(response => response.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ApiResponseType>(`profile`, profile)
            .then(response => response.data)
    },
}