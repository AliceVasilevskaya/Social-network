import React from 'react';
import { reduxForm} from 'redux-form';
import {createField,  Textarea} from '../../Assets/FormsControl/FormsControl';
import {maxLengthCreator, required} from '../../utils/validators';
import {Button} from '../../Assets/Button/Button';
import s from '../../Assets/FormsControl/FormsControl.module.css'

const maxLength100 = maxLengthCreator(10)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField(Textarea,'Enter your message', 'newMessageBody',
                    [required, maxLength100],null,'textarea' )}
            </div>
            <div>
                <Button children={'Send'}/>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({
    form: 'addMessage',
})(AddMessageForm)


export default   AddMessageReduxForm;