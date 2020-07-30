import React from "react";
import h from "./header.module.css"
import logo from "./../../IMG/ButInProjects.png"
import {Button} from "antd";
import 'antd/dist/antd.css'

const Header = (props) => {
    return (
        <div className={h.header}>
            <div className={h.logo}>
                <a href="/personal">
                    <img src={logo} alt="ButInProject"/>
                </a>
            </div>
            <div className={h.label}>Personal Area But-In-Project</div>
            <div className={h.login}>
                <div>{props.login}</div>
                {(props.isAuth) ? <Button type={"primary"} onClick={props.logout}>Logout</Button> : null}
            </div>

        </div>
    )
}

export default Header