import {authApi} from "../api";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
let initialState = {
    login: 0,
    id: 1423,
    email: '',
    isAuth: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                data: action.data,
                isAuth: true
            }
                ;
        default:
            return state;
    }
}
export const setAuthUserData = (id, email, login) => ({
    type: SET_AUTH_USER_DATA,
    data: {id, email, login}
});
export const getAuthUserData = () => (dispatch) => {

    authApi.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login))
                }
            });
}

export default authReducer;