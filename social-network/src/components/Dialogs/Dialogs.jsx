import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
let newMessageElement = React.createRef();
let onSendMessage = () => {
props.sendMessage()
}
let onMessageChange = () => {
let messageText = newMessageElement.current.value;
props.updateNewMessageText(messageText);
}
let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);

return (
    <div className={s.dialogs}>
        <div>
            {dialogsElements}
        </div>
        <div className={s.message}>
            {messagesElements}
        </div>
        <div>
            <div>
                    <textarea placeholder={'Enter your message'}
                              onChange = {onMessageChange}
                              value = {props.newMessageText}
                              ref = {newMessageElement}/>
            </div>
            <div>
                <button onClick={onSendMessage}>Send message</button>
            </div>
        </div>
    </div>
)
}
export default Dialogs;