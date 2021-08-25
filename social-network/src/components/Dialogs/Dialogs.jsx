import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageReduxForm from './DialogForm';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
    let onSendMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div>
                    {dialogsElements}
                </div>
                <div className={s.message}>
                    {messagesElements}
                </div>
            </div>
            <div className={s.btn}>
                <AddMessageReduxForm onSubmit={onSendMessage}/>
            </div>
        </div>
    )
}
export default Dialogs;