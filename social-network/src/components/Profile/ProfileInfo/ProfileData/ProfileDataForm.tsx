import React, {FC} from 'react';
import {createField, GetStringKeys, Input} from "../../../../Common/FormsControl/FormsControl";
import s from '../ProfileInfo.module.css'
import {Button} from "../../../../Common/Button/Button";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from '../../../../Common/FormsControl/FormsControl.module.css'
import {ProfileType} from "../../../../types/types";

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>
const ProfileDataForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType>  = ({handleSubmit, profile,error}) => {
    return <form className={s.editDataForm} onSubmit={handleSubmit}>

        <div><b>Name</b>:{createField<ProfileTypeKeys>(Input, 'name', 'fullName',
            undefined)}</div>
        <div><b>Looking for a job</b>:{createField<ProfileTypeKeys>(Input, undefined, 'lookingForAJob',
            undefined, s.checkbox, 'checkbox')}
        </div>
        <div><b>My professional skills</b>: {createField<ProfileTypeKeys>(Input, 'skills', 'lookingForAJobDescription',
            undefined)}
        </div>

        <div><b>About me</b>: {createField<ProfileTypeKeys>(Input, 'aboutMe', 'aboutMe',
            undefined)}</div>

        <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
        return <div key={key}><b>{key}:{createField(Input, key, 'contacts.' + key,
            [])}</b></div>
    })}

        <Button children={'Save'}/>   {error && <div className={style.formError}>
        {error}
    </div>}
    </form>
}

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({form:'edit-profile'})(ProfileDataForm);
export default ProfileDataReduxForm;