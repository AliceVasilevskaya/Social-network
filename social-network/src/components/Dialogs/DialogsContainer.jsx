import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
        {store => {
            let sendMessage = () => {
               store.dispatch(sendMessageActionCreator());
            }
            let onMessageChange = (messageText) => {
                store.dispatch(updateNewMessageTextActionCreator(messageText));
            }
            return <Dialogs updateNewMessageText={onMessageChange} sendMessage={sendMessage}
                            dialogs={store.getState().dialogPage.dialogs}
                            messages={store.getState().dialogPage.messages}
                            newMessageText={store.getState().dialogPage.newMessageText}/>
        }
      }

    </StoreContext.Consumer>
}
export default DialogsContainer;