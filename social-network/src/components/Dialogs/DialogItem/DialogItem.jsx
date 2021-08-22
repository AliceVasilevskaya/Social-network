import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';
import user from '../../../Assets/Images/user.jpg'


const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <img src={user}/>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogItem;