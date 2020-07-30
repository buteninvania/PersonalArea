import React from "react"
import i from "./../contacts.module.css"
import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined"

const Contact = ({deleteContact, contacts, goToEditMode}) => (
        <div className={i.contactItem} onDoubleClick={goToEditMode}>
            <div className={i.name}>{contacts.name}</div>
            <div className={i.email}>{contacts.email}</div>
            <div className={i.phone}>{contacts.phoneNumber}</div>
            <div className={i.position}>{contacts.position}</div>
            <CloseCircleOutlined className={i.btn} onClick={() => {deleteContact(contacts.id)}}/>
        </div>
)

export default Contact

