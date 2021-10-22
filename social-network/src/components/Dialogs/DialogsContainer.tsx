import React from 'react'
import {actions} from '../../redux/dialogReducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect'
import {compose} from 'redux'
import {AppStateType} from '../../redux/redux-store'

let mapStateToProps = (state: AppStateType ) => {
    return {
    dialogsPage: state.dialogPage
    }
}
export default compose<React.ComponentType>(connect(mapStateToProps,
    {...actions}) ,WithAuthRedirect)(Dialogs)