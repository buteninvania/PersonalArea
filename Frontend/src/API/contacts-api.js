import {coreAPI} from "./api";

export const contactsAPI = {
    getContacts(term="") {
        return coreAPI.get(`contacts?q=${term}`)
            .then(res => res.data)
    },
    addContacts(name, email, phoneNumber, position) {
        return coreAPI.post(`contacts`, {name, email, phoneNumber, position})
            .then(res => res.data)
    },
    deleteContact(userID) {
        return coreAPI.delete(`contacts/${userID}`)
            .then(res => res.data)
    },
    updateContacts(id,name, email, phoneNumber, position) {
        return coreAPI.put(`contacts/${id}/`, {name, email, phoneNumber, position})
            .then(res => res.data)
    }
}

