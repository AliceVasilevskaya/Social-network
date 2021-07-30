import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessageText: state.dialogPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (messageText) => {
            dispatch(updateNewMessageTextActionCreator(messageText));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
    }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps) ,WithAuthRedirect)(Dialogs)