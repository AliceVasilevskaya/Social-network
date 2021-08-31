import React from 'react';
import {reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../Common/utils/validators';
import {createField, Input} from '../../Common/FormsControl/FormsControl';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';
import s from '../../Common/FormsControl/FormsControl.module.css'
import {Button} from "../../Common/Button/Button";

const maxLength40= maxLengthCreator(40)

const LoginForm = ({error, handleSubmit,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, 'email', 'email',
                [required, maxLength40],s.login)}
            {createField(Input, 'password', 'password',
                [required, maxLength40],s.login,'password')}
            {createField(Input,null, 'rememberMe',
                null, s.checkbox,'checkbox', 'remember me')}


            {captchaUrl && <img alt ={'captcha'} src={captchaUrl}/> }
            {captchaUrl && createField(Input,
                'enter numbers', 'captcha',
                [required], s.login)}
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
        props.login(formData.email, formData.password,formData.rememberMe, formData.captcha)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);