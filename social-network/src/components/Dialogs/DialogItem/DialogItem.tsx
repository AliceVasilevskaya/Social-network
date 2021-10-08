import React, {FC} from 'react'
import s from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'
import user from '../../../Common/Images/user.jpg'

type PropsType = {
    id: number
    name: string
}

const DialogItem:FC<PropsType> = (props) => {
    return (
        <div className={s.dialogItem}>
            <img alt ={'userPhoto'} src={user}/>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogItem