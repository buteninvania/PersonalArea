import React from "react"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export function witchAuthRedirect(WrappedComponent) {
    const RedirectComponent = (props) => {
        const {isAuth, ...restProps} = props
        if(!props.isAuth) return <Redirect to = {"/login"}/>
        return <WrappedComponent {...restProps} />
    }
    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect, {})(RedirectComponent)
    return ConnectedAuthRedirectComponent
}