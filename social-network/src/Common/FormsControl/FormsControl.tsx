import React, { FC } from 'react'
import s from './FormsControl.module.css'
import {FieldValidadorType} from '../utils/validators'
import {Field, WrappedFieldProps} from 'redux-form'
import {WrappedFieldMetaProps} from 'redux-form/lib/Field'


type FormsControlOwnType = {
    className: string
}
type FormsControlPropsTypes = {
    meta: WrappedFieldMetaProps
}

export const FormControl:FC<FormsControlPropsTypes> = ({meta: {touched, error},
                                                      children, ...props}) => {
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
export const Input:FC<WrappedFieldProps & FormsControlOwnType>  = (props) => {
    const {input, meta, children, className, ...restProps} = props
    return <FormControl{...props}>
        <input className={className} {...input} {...restProps}/>
    </FormControl>
}
export const Textarea:FC<WrappedFieldProps & FormsControlOwnType> = (props) => {
    const {input, meta, children, className, ...restProps} = props;
    return <FormControl{...props}>
        <textarea className={s.textarea + ' ' + className} {...input} {...restProps}/>
    </FormControl>
}
export function createField<FormKeysType extends string>(component: React.FC<WrappedFieldProps & FormsControlOwnType>,
                            placeholder: string | undefined, name: FormKeysType, validate?: Array<FieldValidadorType>,
                            className?: string | undefined, type?: any, text = '',  props = {}){
    return <div className={className}>
        <Field component={component}
               placeholder={placeholder}
               name={name} validate={validate}
               type={type} {...props}/>
        {text}
    </div>
}
export type GetStringKeys<T> = Extract<keyof T, string>