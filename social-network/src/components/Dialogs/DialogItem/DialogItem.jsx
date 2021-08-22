import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <img src='https://st2.depositphotos.com/3730475/6441/i/600/depositphotos_64411041-stock-photo-starry-night-sky-with-stars.jpg' />
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogItem;