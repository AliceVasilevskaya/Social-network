import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../Assets/FormsControl/FormsControl';
import {maxLengthCreator, required} from '../../utils/validators';
const maxLength100 = maxLengthCreator(10)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component ={Textarea} validate={[required, maxLength100]} placeholder ={'Enter your message'} name = {'newMessageBody'}/>
            </div>
            <div>
                <button > Send</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({
    form: 'addMessage',
})(AddMessageForm )


export default   AddMessageReduxForm;