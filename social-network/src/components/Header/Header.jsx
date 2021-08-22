import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.login_block}>
            {props.isAuth ? <div><button onClick={props.logout} className ={s.link}>Log out</button></div> :
            <NavLink to={'/login'} className ={s.link}> Log in </NavLink>}
        </div>
    </header>
}
export default Header;