import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import userPhoto from '../../../Assets/Images/userPhoto.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return <div className={s.myInfo}>
        <div>
            <img src={profile.photos.large != null ? profile.photos.large : userPhoto}/>
        </div>
        <div>
            <div className={s.name}>
                {profile.fullName}
            </div>
            <div>
                <ProfileStatusWithHooks updateUserStatus={updateUserStatus} status={status}/>
            </div>
        </div>
    </div>
}
export default ProfileInfo;