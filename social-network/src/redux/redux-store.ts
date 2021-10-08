import {Action, applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from './profileReducer'
import dialogReducer from './dialogReducer'
import usersReducer from './usersReducer'
import thunkMiddleWare, {ThunkAction} from 'redux-thunk'
import authReducer from './authReducer'
import {reducer as formReducer} from 'redux-form'
import appReducer from './appReducer'

const rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export type InferActionTypes<T> = T extends {[keys: string]:(...args: any[])=>infer U}? U : never
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type BaseThunkType<A extends Action,R = Promise<void> > =  ThunkAction<R, AppStateType, unknown, A>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
 const store = createStore(rootReducer,
     composeEnhancers(applyMiddleware(thunkMiddleWare)
     ))

export default store