import React, {FC} from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../Common/utils/validators'
import {createField,GetStringKeys, Input} from '../../Common/FormsControl/FormsControl'
import {connect} from 'react-redux'
import {login} from '../../redux/authReducer'
import {Redirect} from 'react-router-dom'
import s from '../../Common/FormsControl/FormsControl.module.css'
import {Button} from '../../Common/Button/Button'
import {AppStateType} from '../../redux/redux-store'

const maxLength40= maxLengthCreator(40)
type  LoginFormOwnPropsType = {
    captchaUrl: string | null
}
type MapDispatchPropsType = {
    login:(email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

const LoginForm:FC<InjectedFormProps<LoginFormValueType, LoginFormOwnPropsType> & LoginFormOwnPropsType> =
    ({error, handleSubmit,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValueTypeKeys>(Input, 'email', 'email',
                [required, maxLength40], s.login)}
            {createField<LoginFormValueTypeKeys>(Input, 'password', 'password',
                [required, maxLength40], s.login, 'password')}
            {createField<LoginFormValueTypeKeys>(Input,undefined, 'rememberMe',
                undefined, s.checkbox,'checkbox', 'remember me')}


            {captchaUrl && <img alt ={'captcha'} src={captchaUrl}/> }
            {captchaUrl && createField<LoginFormValueTypeKeys>(Input,
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

type LoginFormValueType = {
    email:string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormValueTypeKeys = GetStringKeys<LoginFormValueType>

const LoginReduxForm = reduxForm<LoginFormValueType, LoginFormOwnPropsType>({form: 'login'})(LoginForm)
const Login: FC<MapDispatchPropsType & MapStatePropsType> = (props) => {
    const onSubmit = (formData:LoginFormValueType) => {
        props.login(formData.email, formData.password,formData.rememberMe, formData.captcha)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)