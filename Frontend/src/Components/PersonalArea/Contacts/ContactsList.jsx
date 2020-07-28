import React, {useState} from "react";
import c from "./contacts.module.css"
import Contact from "./Contact/Contact";
import {ContactEditForm} from "../ContactForms/Forms";

const ContactsList = ({deleteContact, contacts, updateContact}) => {
    const [editMode, setEditMode] = useState(false)

    return (

        <div className={c.contactsContainer}>
            {!editMode
                ? <Contact deleteContact={deleteContact}
                           goToEditMode={() => setEditMode(true)}
                           contacts={contacts}
                />
                : <ContactEditForm updateContact={updateContact}
                                   endEditMode={() => setEditMode(false)}
                                   data = {contacts}
                />
            }
        </div>
    )
}






export default ContactsList