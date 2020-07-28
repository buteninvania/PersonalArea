import React from "react";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {LoginReduxForm} from "./LoginReduxForm";
import f from "./loginpage.module.css"

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password)
    }
    if (props.isAuth) {
        return <Redirect to={"/personal"}/>
    }
    return (
            <div className={f.loginPage}>
                <div className={f.label}><h1>Login to your account</h1></div>
                <div className={f.formContent}><LoginReduxForm onSubmit={onSubmit}/></div>
            </div>

    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(LoginPage)