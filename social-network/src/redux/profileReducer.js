import {profileApi} from '../api';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {message: 'post text', likes: '❤ 15'},
        {message: 'post text', likes: '❤ 15'},
        {message: 'post text', likes: '❤ 15'},
        {message: 'post text', likes: '❤ 15'},
        {message: 'post text', likes: '❤ 15'}
    ],
    profile: null,
    status: 'Hi'
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostBody,
                likes: '❤ 20'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
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
        default:
            return state;
    }
}
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });

    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then(data => {
            dispatch(setUserStatus(data));
        });
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }

        });
    }
}
export default profileReducer;