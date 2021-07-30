import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import usersReducer from './usersReducer';
import thunkMiddleWare from 'redux-thunk';
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
});


let store = createStore(reducers,applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;