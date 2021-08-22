import {profileApi} from '../api';

const DELETE_POST = 'social-network/profilePage/DELETE_POST';
const ADD_POST = 'social-network/profilePage/ADD_POST';
const SET_USER_PROFILE = 'social-network/profilePage/SET_USER_PROFILE';
const SET_USER_STATUS = 'social-network/profilePage/SET_USER_STATUS';

let initialState = {
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        default:
            return state;
    }
}
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileApi.getProfile(userId)
    dispatch(setUserProfile(data));
}
export const getUserStatus = (userId) => async (dispatch) => {
        let data = await profileApi.getStatus(userId)
            dispatch(setUserStatus(data));
}
export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileApi.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }


}
export default profileReducer;