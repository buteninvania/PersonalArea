import React from "react";
import {compose} from "redux";
import {addContact, deleteContact, getContacts, saveContacts} from "../../Redux/contacts-reducer";
import {witchAuthRedirect} from "../../Redirect/authRedirect";
import PersonalArea from "./PersonalArea";
import {connect} from "react-redux";

class PersonalAreaContainer extends React.Component {

    componentDidMount() {
        this.props.getContacts()
    }

    addContactSubmit = (values) => {
        const {name, email, phoneNumber, position} = values
        this.props.addContact(name, email, phoneNumber, position)
    }
    updateContact = (values) => {
        const {id, name, email, phoneNumber, position} = values
        this.props.saveContacts(id, name, email, phoneNumber, position)
    }
    onFilterChanged = (filter) => {
        this.props.getContacts(filter)
    }

    render() {
        return (
            <PersonalArea deleteContact={this.props.deleteContact}
                          addContactSubmit={this.addContactSubmit}
                          contacts = {this.props.contacts}
                          updateContact = {this.updateContact}
                          onFilterChanged = {this.onFilterChanged}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contactsPage.contacts,
    isAuth: state.auth.isAuth,
})

export default compose(
    connect(mapStateToProps, {getContacts, addContact, deleteContact, saveContacts}),
    witchAuthRedirect
) (PersonalAreaContainer)