import React, { FC } from 'react'
import s from '../ProfileInfo.module.css'
import {Button} from '../../../../Common/Button/Button'
import {ContactsType, ProfileType} from "../../../../types/types";

type PropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
const ProfileData: FC<PropsType> = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.dataForm}>

        <div><b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob &&
        <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>
        }
        <div><b>About me</b>: {profile.aboutMe}</div>
        <div className={s.contacts}><b>Contacts:</b>
            {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}</div>
        {isOwner && <div>
        <Button children={'Edit profile'} onClick={goToEditMode}/>
    </div>
    }
    </div>
}

type ContactType = {
    contactTitle: string
    contactValue:string
}
const Contact: FC<ContactType> = ({contactTitle, contactValue}) => {
    return <div>
        <span className={s.contactsTitle}>{contactTitle}</span>:<span>{contactValue}</span>
</div>
}
export default ProfileData