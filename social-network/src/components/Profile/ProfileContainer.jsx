import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(this.props.status)
    }
   render() {
    return <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                 updateUserStatus={this.props.updateUserStatus} />
    </div>
   }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})
export default  compose(connect(mapStateToProps, { getUserProfile, getUserStatus,updateUserStatus}),WithAuthRedirect, withRouter)(ProfileContainer);