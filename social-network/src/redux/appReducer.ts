import {getAuthUserData} from './authReducer'
import {ThunkAction} from 'redux-thunk'
import {AppStateType, InferActionTypes} from './redux-store'

const initialState = {
    initialized: false
}
const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'social-network/app/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const actions = {
    initializedSuccess:() => ({type: 'social-network/app/INITIALIZED_SUCCESS'} as const)
}
export const initializeApp = (): ThunkAction<void, AppStateType, unknown, ActionTypes> => (dispatch) => {
    try {
        const promise = dispatch(getAuthUserData())
        Promise.all([promise]).then(() => dispatch(actions.initializedSuccess))
    } catch (e: any) {
        console.log(e.message)
    }
}

export type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof actions>

export default appReducer