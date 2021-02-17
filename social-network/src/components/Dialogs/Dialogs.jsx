import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div>
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
            {props.name}
        </NavLink>
    </div>
}

const Messages = (props) => {
    return <div className={s.dialog}>
        {props.message}
    </div>
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='User1' id='1'/>
                <DialogItem name='User2' id='2'/>
                <DialogItem name='User3' id='3'/>
                <DialogItem name='User4' id='4'/>
                <DialogItem name='User5' id='5'/>
                <DialogItem name='User6' id='6'/>
                <DialogItem name='User7' id='7'/>
            </div>

            <div className={s.message}>
                <Messages message='Text message'/>
                <Messages message='Text message'/>
                <Messages message='Text message'/>
                <Messages message='Text message'/>
                <Messages message='Text message'/>
                <Messages message='Text message'/>
                <Messages message='Text message'/>
            </div>
        </div>

    )
}
export default Dialogs;