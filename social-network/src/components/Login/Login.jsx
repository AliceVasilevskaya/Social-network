import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators';
import {Input} from '../../Assets/FormsControl/FormsControl';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';
import s from '../../Assets/FormsControl/FormsControl.module.css'

const maxLength40= maxLengthCreator(40)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
               <Field component = {Input} placeholder ={'email'} name = {'email'}  validate={[required, maxLength40]}/>
            </div><div>
                <Field component = {Input} placeholder ={'password'} name = {'password'} validate={[required, maxLength40]}/>
            </div>
            <div>
                <Field component = {Input} type = {'checkbox'} name = {'rememberMe'} />remember me
            </div>
            <div className={s.formError}>
                {props.error}
            </div>
            <div>
               <button> Login </button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)
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