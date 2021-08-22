import React from 'react';
import {
    sendMessage
} from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
    return {
    dialogsPage: state.dialogPage
    }
}
export default compose(connect(mapStateToProps, {sendMessage}) ,WithAuthRedirect)(Dialogs)