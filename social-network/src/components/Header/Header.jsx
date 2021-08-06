import React from 'react';
import s from './Header.module.css'
import img from '../../Assets/Images/preloader.png'
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src={img}/>
        <div className={s.login_block}>
            {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div> :
            <NavLink to={'/login'} className ={s.link}> Login </NavLink>}
        </div>
    </header>
}
export default Header;