
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    users:[],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return{...u, followed: false}
                    } return u;
                })
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id){
                        return{...u, followed: true}
                    } return u;
                })
            };
        case SET_USERS:
            return {...state, users: action.users }
        case SET_TOTAL_USERS_COUNT:
            return {...state,totalUsersCount :action.totalUsersCount }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
            default:
            return state;
    }

}

export const follow = (id) => ({type: FOLLOW, id});
export const unfollow = (id) => ({type: UNFOLLOW, id});
export const setUsers = (users) => ({type: SET_USERS,users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT,totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE,currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export default usersReducer;