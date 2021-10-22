import {updateObjectInArray} from '../Common/utils/object-helpers'
import {UserType} from '../types/types'
import {BaseThunkType, InferActionTypes} from './redux-store'
import {Dispatch} from 'redux'
import {usersAPI} from '../api/users-api'
import {ApiResponseType} from '../api/api'

let initialState = {
    users: [] as Array<UserType>,
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, // array of user ids
    filter: {term: '', friend: null as null | boolean}
}

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'social-network/usersPage/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case 'social-network/usersPage/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case 'social-network/usersPage/SET_USERS':
            return {...state, users: action.users}
        case 'social-network/usersPage/SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'social-network/usersPage/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'social-network/usersPage/TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'social-network/usersPage/SET_FILTER':
            return {...state, filter: action.payload}
        case 'social-network/usersPage/TOGGLE_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}
export const actions = {
    setFilter: (filter: FilterType) => ({type: 'social-network/usersPage/SET_FILTER', payload:filter} as const),
    followSuccess: (userId: number) => ({type: 'social-network/usersPage/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'social-network/usersPage/UNFOLLOW', userId} as const),
    setUsersSuccess: (users: Array<UserType>) => ({type: 'social-network/usersPage/SET_USERS', users} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'social-network/usersPage/SET_TOTAL_USERS_COUNT',
        totalUsersCount
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: 'social-network/usersPage/SET_CURRENT_PAGE',
        currentPage
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: 'social-network/usersPage/TOGGLE_IS_FETCHING',
        isFetching
    } as const),
    toggleFollowingProgress: (isFetching: boolean, id: number) => ({
        type: 'social-network/usersPage/TOGGLE_FOLLOWING_PROGRESS',
        isFetching,
        id
    } as const)
}
const followUnfollowFlow = async (dispatch: Dispatch<ActionTypes>, apiMethod: (userId: number) => Promise<ApiResponseType>,
                                  userId: number,
                                  actionCreator: (userId: number) => ActionTypes) => {
    try {
        dispatch(actions.toggleFollowingProgress(true, userId))
        let data = await apiMethod(userId)
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(actions.toggleFollowingProgress(false, userId))
    } catch (e: any) {
        console.log(e.message)
    }
}
export const unfollow = (userId: number): ThunkType =>
    async (dispatch) => {
        try {
            let apiMethod = usersAPI.unfollow.bind(usersAPI)
            followUnfollowFlow(dispatch, apiMethod, userId, actions.unfollowSuccess)
        } catch (e: any) {
            console.log(e.message)
        }
    }
export const follow = (userId: number): ThunkType => async (dispatch) => {
    try {

        followUnfollowFlow(dispatch, usersAPI.follow.bind(usersAPI) , userId, actions.followSuccess)
    } catch (e: any) {
        console.log(e.message)
    }
}
export const requestUsers = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(currentPage))
        dispatch(actions.setFilter(filter))
        let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsersSuccess(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))


    } catch (e: any) {
        console.log(e.message)
    }
}

type ActionTypes = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes>
export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter

export default usersReducer