import React from 'react'
import {connect} from 'react-redux'
import {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile} from '../../redux/profileReducer'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect'
import {compose} from 'redux'
import Profile from './Profile'
import {AppStateType} from '../../redux/redux-store'
import {ProfileType} from '../../types/types'

type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props)
    }

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        if (!userId) {
            console.error('ID should exist in URI params oe in state("authorizedUserId")')
        } else {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
                     isOwner={!this.props.match.params.userId}/>

        </div>
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(connect
(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile
}), WithAuthRedirect, withRouter)(ProfileContainer)