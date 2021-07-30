import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import userPhoto from '../../../Assets/Images/userPhoto.png';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={s.myInfo}>
        <div>
            <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
        </div>
        <div>
            <div className={s.name}>
                {props.profile.fullName}
            </div>
            <div>
           <ProfileStatus  updateUserStatus={props.updateUserStatus} status ={props.status}/>
            </div>
        </div>
    </div>
}
export default ProfileInfo;