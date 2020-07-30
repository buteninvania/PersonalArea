import React from "react";
import ContactsList from "./Contacts/ContactsList";
import c from "./personalArea.module.css"
import {AddContactsForm, ContactsSearchForm} from "./ContactForms/Forms";
import {useSpring, animated} from "react-spring";


const PersonalArea = ({contacts, addContactSubmit, deleteContact, updateContact, onFilterChanged}) => {
    const styleOpacity = useSpring({
        from: {opacity: 0, padding: 20},
        opacity: 1,
        padding: 0
    })
    return (
        <animated.div style={styleOpacity} className={c.personalAreaContent}>
            <AddContactsForm addContactSubmit = {addContactSubmit} />
            <ContactsSearchForm onFilterChanged={onFilterChanged} />
            <div className={c.listContacts}>
                {contacts.map(i => <ContactsList updateContact = {updateContact}
                                                 contacts = {i}
                                                 key = {i.id}
                                                 deleteContact = {deleteContact}/>)}
            </div>
        </animated.div>
    )
}

export default PersonalArea