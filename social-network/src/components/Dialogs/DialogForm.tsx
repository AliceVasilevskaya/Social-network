import React, {FC} from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, GetStringKeys, Textarea} from '../../Common/FormsControl/FormsControl'
import {maxLengthCreator, required} from '../../Common/utils/validators'
import {Button} from '../../Common/Button/Button'
import {NewMessageFormType} from './Dialogs'

const maxLength100 = maxLengthCreator(10)
type DialogsFormValuesKeysType =GetStringKeys<NewMessageFormType>
type PropsType ={}


const AddMessageForm:FC<InjectedFormProps<NewMessageFormType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<DialogsFormValuesKeysType>(Textarea,'Enter your message',
                'newMessageBody', [required, maxLength100],undefined,'text' )}
            </div>
            <div>
                <Button children={'Send'}/>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm<NewMessageFormType>({
    form: 'addMessage'
})(AddMessageForm)


export default AddMessageReduxForm;