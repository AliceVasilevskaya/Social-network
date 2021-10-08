import {maxLengthCreator, required} from '../../../../Common/utils/validators'
import {createField, GetStringKeys, Textarea} from '../../../../Common/FormsControl/FormsControl'
import {Button} from '../../../../Common/Button/Button'
import {InjectedFormProps, reduxForm} from 'redux-form'
import React, {FC} from 'react'

const maxLength300 = maxLengthCreator(300)
type PropsType = {}
export type AddPostFormValuesType = {
    newPostBody: string
}
type AddPostFormValuesKeysType = GetStringKeys<AddPostFormValuesType>

const AddPostForm:FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostFormValuesKeysType>(Textarea,'Enter your message', 'newPostBody',
                    [required, maxLength300],undefined,'text')}
            </div>
            <Button children={'Add Post'}/>
        </form>
    )
}

export default reduxForm<AddPostFormValuesType, PropsType>({form: "profileAddPostForm"}) (AddPostForm);