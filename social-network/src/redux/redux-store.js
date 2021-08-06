import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import usersReducer from './usersReducer';
import thunkMiddleWare from 'redux-thunk';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});


let store = createStore(reducers,applyMiddleware(thunkMiddleWare));

window.store = store;
export default store;