import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status}
                     updateUserStatus={props.updateUserStatus}
                     savePhoto={props.savePhoto}
                     saveProfile ={props.saveProfile}
                     isOwner={props.isOwner}/>
        <div><MyPostsContainer/></div>
    </div>
}
export default Profile;