import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=1423;
        }
        this.props.getProfile(userId);
        getUserStatus(this.props.status)
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
})
export default  compose(connect(mapStateToProps, { getProfile, getUserStatus,updateUserStatus}),WithAuthRedirect, withRouter)(ProfileContainer);