import React from "react"
import {Field} from "redux-form";
import f from "./formcontrols.module.css"

export const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return(
        <div className={f.formControl + " " + (hasError ? f.error :"")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export function createField(name, validate, component, placeholder, props = {}, text = "") {
    return (
        <div>
            <Field
                name={name}
                validate={validate}
                component={component}
                placeholder={placeholder}
                {...props}/> {text}
        </div>
    )
}