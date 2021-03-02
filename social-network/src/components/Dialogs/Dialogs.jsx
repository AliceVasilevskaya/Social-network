import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
    let dialogs = [
        {name: 'User1', id: 1},
        {name: 'User1', id: 1},
        {name: 'User1', id: 1},
        {name: 'User1', id: 1},
        {name: 'User1', id: 1}
    ]
    let messages = [
        {message: 'text message'},
        {message: 'text message'},
        {message: 'text message'},
        {message: 'text message'},
        {message: 'text message'}
    ]


    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messages.map(m => <Message message={m.message}/>)

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