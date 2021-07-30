import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import  UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
function App(props) {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <DialogsContainer/>}/>
                    <Route path='/profile:userId?' render={ () => <ProfileContainer/>}/>
                    <Route path='/users' render={ () => <UsersContainer/>}/>
                    <Route path='/news' render={ () => <Login /> }/>
                    <Route path='/music' render={ () => <Music /> }/>
                    <Route path='/settings' render={ () => <Settings/> }/>
                    <Route path='/login' render={ () => <Login/> }/>

                </div>
            </div>

    );
}

export default App;