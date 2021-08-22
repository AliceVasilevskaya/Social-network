import React from 'react';
import s from './FormsControl.module.css'
import {Field} from "redux-form";


export const FormControl = ({input, meta:{touched, error}, child, children, ...props}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : ' ')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}

        </div>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl{...props}><input {...input} {...restProps}/></FormControl>
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const createField = (component, placeholder, name, validate, type, text = '',props = {}) => {
    return <div>
        <Field component={component} placeholder={placeholder} name={name} validate={validate} type={type} {...props}/>
        {text}
    </div>
}