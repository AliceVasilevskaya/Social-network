import React from 'react';
import s from '../ProfileInfo.module.css';
import {Button} from "../../../../Common/Button/Button";

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.dataForm}>

        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob &&
        <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>
        }
        <div><b>About me</b>: {profile.aboutMe}</div>
        <div className={s.contacts}><b>Contacts:</b>
            {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
        {isOwner && <div>
        <Button children={'Edit profile'} onClick={goToEditMode}/>
    </div>
    }
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div>
        <span className={s.contactsTitle}>{contactTitle}</span>:<span>{contactValue}</span>
</div>
}
export default ProfileData;