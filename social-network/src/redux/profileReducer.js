import {profileApi} from '../api';
import {stopSubmit} from "redux-form";
import React from "react";
import { SubmissionError } from 'redux-form';

const DELETE_POST = 'social-network/profilePage/DELETE_POST';
const ADD_POST = 'social-network/profilePage/ADD_POST';
const SET_USER_PROFILE = 'social-network/profilePage/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-network/profilePage/SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'social-network/profilePage/SAVE_PHOTO_SUCCESS';


const initialState = {
    posts: [
        {id: 1, message: 'post text', likes: '❤ 15'},
        {id: 2, message: 'post text', likes: '❤ 15'},
        {id: 3, message: 'post text', likes: '❤ 15'},
        {id: 4, message: 'post text', likes: '❤ 15'},
        {id: 5, message: 'post text', likes: '❤ 15'}
    ],
    profile: null,
    status: 'Hi'
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: action.newPostBody,
                likes: '❤ 20'
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profileApi.getProfile(userId)
    dispatch(setUserProfile(data));
}
export const getUserStatus = (userId) => async (dispatch) => {
    const data = await profileApi.getStatus(userId)
    dispatch(setUserStatus(data));
}
export const updateUserStatus = (status) => async (dispatch) => {
    const data = await profileApi.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}
export const savePhoto = (photoFile) => async (dispatch) => {
    const response = await profileApi.savePhoto(photoFile)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileApi.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
      dispatch(stopSubmit('edit-profile', {_error:response.data.messages[0]} ))
        return Promise.reject(response.data.messages[0])
    }
}
// export const saveProfile = (formData) => async (dispatch, getState) => {
//     const userId = getState().auth.id;
//     const response = await profileApi.saveProfile(formData);
//     if (response.data.resultCode === 0) {
//         dispatch(getUserProfile(userId));
//     } else {
//         let objError = {};
//         Object.keys(formData.contacts).map(key => {
//             objError[key] = response.data.messages[0];
//         })
//         dispatch(stopSubmit('edit-profile',
//             {'contacts': objError}))
//         return  Promise.reject(response.data.messages[0])
//     }
// }
export default profileReducer;