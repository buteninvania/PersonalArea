import React, {Component} from "react";
import Header from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";

class HeaderContainer extends Component {

    render() {
        return (
                <Header {...this.props} />

        )
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, {logout}))(HeaderContainer)