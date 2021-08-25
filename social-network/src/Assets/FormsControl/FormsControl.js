import React from 'react';
import s from './FormsControl.module.css'
import {Field} from 'redux-form';


export const FormControl = ({input, meta: {touched, error}, child, children, ...props}) => {
    const hasError = touched && error;
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
    const {input, meta, child, className, ...restProps} = props
    return <FormControl{...props}>
        <input className={className} {...input} {...restProps}/>
    </FormControl>
}
export const Textarea = (props) => {
    const {input, meta, child, className, ...restProps} = props;
    return <FormControl{...props}>
        <textarea className={s.textarea + ' ' + className} {...input} {...restProps}/>
    </FormControl>
}
export const createField = (component, placeholder, name, validate,className, type, text = '',  props = {}) => {
    return <div className={className}>
        <Field component={component} placeholder={placeholder} name={name} validate={validate} type={type} {...props}/>
        {text}
    </div>
}