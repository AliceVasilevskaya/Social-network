import React from 'react';
import {createField, Input} from "../../../../Assets/FormsControl/FormsControl";
import s from '../ProfileInfo.module.css'
import {Button} from "../../../../Assets/Button/Button";
import {reduxForm} from "redux-form";
import style from '../../../../Assets/FormsControl/FormsControl.module.css'
import {InputError, required} from "../../../../utils/validators";

const ProfileDataForm = ({handleSubmit, profile,error}) => {
    return <form className={s.editDataForm} onSubmit={handleSubmit}>

        <div><b>Name</b>:{createField(Input, 'name', 'fullName',
            null)}</div>
        <div><b>Looking for a job</b>:{createField(Input, null, 'lookingForAJob',
            null, s.checkbox, 'checkbox')}
        </div>
        <div><b>My professional skills</b>: {createField(Input, 'skills', 'lookingForAJobDescription',
            null)}
        </div>

        <div><b>About me</b>: {createField(Input, 'aboutMe', 'aboutMe',
            null)}</div>

        <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
        return <div key={key}><b>{key}:{createField(Input, key, 'contacts.' + key,
            [])}</b></div>
    })}

        <Button children={'Save'}/>   {error && <div className={style.formError}>
        {error}
    </div>}
    </form>
}

const ProfileDataReduxForm = reduxForm({form:'edit-profile'})(ProfileDataForm);
export default ProfileDataReduxForm;