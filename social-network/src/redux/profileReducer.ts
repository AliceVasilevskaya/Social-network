import {FormAction, stopSubmit} from 'redux-form'
import {PhotosType, PostType, ProfileType} from '../types/types'
import {BaseThunkType, InferActionTypes} from './redux-store'
import {profileApi} from '../api/profile-api'

const initialState = {
    posts: [
        {id: 1, message: 'post text', likes: '❤ 15'},
        {id: 2, message: 'post text', likes: '❤ 15'},
        {id: 3, message: 'post text', likes: '❤ 15'},
        {id: 4, message: 'post text', likes: '❤ 15'},
        {id: 5, message: 'post text', likes: '❤ 15'}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}

const profileReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'social-network/profilePage/ADD_POST':
            let newPost = {
                id: 6,
                message: action.newPostBody,
                likes: '❤ 20'
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case 'social-network/profilePage/SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'social-network/profilePage/SET_USER_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'social-network/profilePage/DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case 'social-network/profilePage/SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state
    }
}

export const actions = {
    addPost: (newPostBody: string) => ({type: 'social-network/profilePage/ADD_POST', newPostBody} as const),
    deletePost: (postId: number) => ({type: 'social-network/profilePage/DELETE_POST', postId} as const),
    setUserProfile: (profile: ProfileType) => ({type: 'social-network/profilePage/SET_USER_PROFILE', profile} as const),
    setUserStatus: (status: string) => ({type: 'social-network/profilePage/SET_USER_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'social-network/profilePage/SAVE_PHOTO_SUCCESS', photos} as const)

}

export const getUserProfile = (userId: number | null): ThunkType => async (dispatch) => {
    try {
        const data = await profileApi.getProfile(userId)
        dispatch(actions.setUserProfile(data))
    } catch (e: any) {
        console.log(e.message)
    }
}
export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
    try {
        const data = await profileApi.getStatus(userId)
        dispatch(actions.setUserStatus(data))
    } catch (e: any) {
        console.log(e.message)
    }
}
export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
    try {
        const data = await profileApi.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(actions.setUserStatus(status))
        }
    } catch (e: any) {
        console.log(e.message)
    }
}
export const savePhoto = (photoFile: File): ThunkType => async (dispatch) => {
    try {
        const photoData = await profileApi.savePhoto(photoFile)
        if (photoData.resultCode === 0) {
            dispatch(actions.savePhotoSuccess(photoData.data.photos))
        }
    } catch (e: any) {
        console.log(e.message)
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    try {
        const userId = getState().auth.id
        const profileData = await profileApi.saveProfile(profile)
        if (profileData.resultCode === 0) {
            if (userId !== null) {
                dispatch(getUserProfile(userId))
            } else {
                throw new Error(`userId can't be null`)
            }

        } else {
            dispatch(stopSubmit('edit-profile', {_error: profileData.messages[0]}))
            return Promise.reject(profileData.messages[0])
        }
    } catch (e: any) {
        console.log(e.message)
    }
}

export type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionTypes | FormAction>
type ActionTypes = InferActionTypes<typeof actions>

export default profileReducer