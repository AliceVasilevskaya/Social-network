import {profileApi} from "../api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
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
        newPostText: '',
        profile: null,
        status: 'Hi'
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: '❤ 20'
            }
            return{
                ...state,
                posts:[...state.posts, newPost],
                newPostText:''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:{
            return {...state,
                profile: action.profile}
        }
        case SET_USER_STATUS:{
            return {...state,
                status: action.status}
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (postText) => ({type: UPDATE_NEW_POST_TEXT, newText: postText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getProfile = (userId) => {
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
            if(data.resultCode === 0){
                dispatch(setUserStatus(status));}

        });
    }
}
export default profileReducer;