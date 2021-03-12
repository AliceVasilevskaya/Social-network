import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {



    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div className={s.message}>
                {messagesElement}
            </div>
        </div>

    )
}
export default Dialogs;