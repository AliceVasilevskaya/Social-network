import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import usersReducer from './usersReducer';
import thunkMiddleWare from 'redux-thunk';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';
import appReducer from './appReducer';

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogPage:dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers,
     composeEnhancers(applyMiddleware(thunkMiddleWare)
     ));

export default store;