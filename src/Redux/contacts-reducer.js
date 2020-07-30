import {contactsAPI} from '../API/contacts-api'

const initialState = {
    contacts: [],
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FrontEnd/practice/SET_CONTACT":
            return {...state, contacts: action.contacts}
        default:
            return state
    }
}

export const actions = {
    setContact: (contacts) => ({type: "FrontEnd/practice/SET_CONTACT", contacts}),
}

export const getContacts = (filter="") => {
    return async (dispatch) => {
        const data = await contactsAPI.getContacts(filter.term)
        dispatch(actions.setContact(data))
    }
}
export const addContact = (name, email, phoneNumber, position) => {
    return async (dispatch) => {
        await contactsAPI.addContacts(name, email, phoneNumber, position)
        dispatch(getContacts())
    }
}
export const deleteContact = (contactId) => {
    return async (dispatch) => {
        await contactsAPI.deleteContact(contactId)
        dispatch(getContacts())
    }
}
export const saveContacts = (id, name, email, phoneNumber, position) => {
    return async (dispatch) => {
        await contactsAPI.updateContacts(id, name, email, phoneNumber, position)
        dispatch(getContacts())
    }
}

export default contactsReducer