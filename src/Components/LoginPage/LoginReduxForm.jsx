import React from 'react'
import {reduxForm} from 'redux-form'
import {createField, Input} from '../../Utils/FormControls/FormsControl'
import {requiredField} from '../../Utils/Validators/validators'
import f from './../../Utils/FormControls/formcontrols.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit = {handleSubmit}>
            {createField('login', [requiredField], Input, 'Login...')}
            {createField("password", [requiredField], Input, 'Password...', {type: 'password'})}
            { error && <div className={f.formSummaryError}>{error}</div>}
            <div className={f.btnSubmit}>
                <button>Submit</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm({form: 'login',})(LoginForm)