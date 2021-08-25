import React from 'react';
import {reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators';
import {createField, Input} from '../../Assets/FormsControl/FormsControl';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';
import s from '../../Assets/FormsControl/FormsControl.module.css'
import {Button} from "../../Assets/Button/Button";

const maxLength40= maxLengthCreator(40)

const LoginForm = ({error, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, 'email', 'email',
                [required, maxLength40],s.login)}
            {createField(Input, 'password', 'password',
                [required, maxLength40],s.login,'password')}
            {createField(Input,null, 'rememberMe',
                null, s.checkbox,'checkbox', 'remember me')}

            {error && <div className={s.formError}>
                {error}
            </div>}
            <div>
              <Button children={'Log in'} />
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);