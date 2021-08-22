import {usersAPI} from '../api';
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'social-network/usersPage/FOLLOW';
const UNFOLLOW = 'social-network/usersPage/UNFOLLOW';
const SET_USERS = 'social-network/usersPage/SET_USERS';
const SET_TOTAL_USERS_COUNT = 'social-network/usersPage/SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'social-network/usersPage/SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'social-network/usersPage/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'social-network/usersPage/TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,'id', {followed: false})
            }
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,'id', {followed: true})
            };
        case SET_USERS:
            return {...state, users: action.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id != action.id)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsersSuccess = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, id) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, id});



const followUnfollowFlow = async (dispatch,apiMethod, userId, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
export const unfollow = (userId) => async (dispatch) => {
    let apiMethod =  usersAPI.unfollow.bind(usersAPI);
    let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, apiMethod, userId, actionCreator)
}
export const follow = (userId) => async (dispatch) => {
    let apiMethod =  usersAPI.follow.bind(usersAPI);
    let actionCreator = followSuccess;
    followUnfollowFlow(dispatch, apiMethod, userId, actionCreator);
}
export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsersSuccess(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(setCurrentPage(currentPage))
}
export const setUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsersSuccess(data.items))
}

export default usersReducer;