import React from 'react'
import Header, {MapDispatchPropsType, MapStatePropsType} from './Header'
import {connect} from 'react-redux'
import {logout} from '../../redux/authReducer'
import {AppStateType} from '../../redux/redux-store'

class HeaderContainer extends React.Component<MapDispatchPropsType & MapStatePropsType> {

    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default  connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps, {logout})(HeaderContainer)