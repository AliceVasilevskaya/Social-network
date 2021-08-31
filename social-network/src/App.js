import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import {compose} from 'redux';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import {WithSuspense} from './hoc/WithSuspense';
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs' render={WithSuspense(DialogsContainer)}/>
                        <Route path='/profile:userId?' render={WithSuspense(ProfileContainer)}/>
                        <Route path='/users' render={WithSuspense(UsersContainer)}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={WithSuspense(Login)}/>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>} />
                        <Route path='*' render={<div>404</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
const AppContainer = compose(
        connect(mapStateToProps, {initializeApp})
        , withRouter)(App)


const  SocialNetworkApp = () => {
    return  <BrowserRouter >
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SocialNetworkApp;