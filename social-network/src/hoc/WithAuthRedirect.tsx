import React, {FC} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {AppStateType} from '../redux/redux-store'

let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as MapPropsType)

type MapPropsType = {
    isAuth: boolean
}

export function WithAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: FC<MapPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <WrappedComponent {...restProps as WCP}/>

    }

    return connect<MapPropsType, {}, WCP, AppStateType>(mapStateToProps)(RedirectComponent)

}
