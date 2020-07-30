import React from "react"
import f from "./ContactsForm.module.css"
import {Field, Form, Formik, useFormik} from "formik"
import i from "../Contacts/contacts.module.css"
import CloseCircleOutlined from "@ant-design/icons/lib/icons/CloseCircleOutlined"

export const ContactsSearchForm = ({onFilterChanged}) => {
    const submit = (values, {setSubmitting}) => {
        onFilterChanged(values)
        setSubmitting(false)
    }

    return (
        <div className={f.contactsSearchForm}>
            <Formik
                initialValues={{ term: ''}}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export const AddContactsForm = ({addContactSubmit}) => {
    const formik = useFormik({
        initialValues: {
            name:'',
            email: '',
            phoneNumber: '',
            position: '',
        },
        validate,
        onSubmit: values => {
            addContactSubmit(values)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit} className={f.addContactsForm}>
            <p><b>Add a new employee?</b></p>
            <input id="name"
                   placeholder={"Name"}
                   className={f.inputForm + " " + (formik.errors.name ? f.errorInput : "")}
                   name="name"
                   type="text"
                   onChange={formik.handleChange}
                   value={formik.values.name}/>
            <input id="email"
                   placeholder={"Email"}
                   className={f.inputForm + " " + (formik.errors.email ? f.errorInput : "")}
                   name="email"
                   type="email"
                   onChange={formik.handleChange}
                   value={formik.values.email}/>
            <input id="phoneNumber"
                   placeholder={"Phone number"}
                   className={f.inputForm + " " + (formik.errors.phoneNumber ? f.errorInput : "")}
                   name="phoneNumber"
                   type="tel"
                   onChange={formik.handleChange}
                   value={formik.values.phoneNumber}/>
            <select id="position"
                    className={f.inputForm + " " + (formik.errors.position ? f.errorInput : "")}
                    name="position"
                    onChange={formik.handleChange}
                    value={formik.values.position}>
                <option value="" disabled> Position selection</option>
                <option value="Owner">Owner</option>
                <option value="CTO">CTO</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Senior developer">Senior developer</option>
                <option value="Middle Developer">Middle Developer</option>
                <option value="Junior Developer">Junior Developer</option>
            </select>
            {formik.errors.name || formik.errors.email || formik.errors.phoneNumber || formik.errors.position
                ? errorsMessage(formik.errors)
                : null}
            <button type="submit">Add Contact</button>
        </form>

    )
}
export const ContactEditForm = ({data, updateContact, endEditMode}) => {
    const formik = useFormik({
        initialValues: {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            position: data.position,
            id: data.id
        },
        validate,
        onSubmit: values => {
            updateContact(values)
            endEditMode()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={f.contactsEditForm}>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}/>
            {formik.errors.name ? <div className={f.error}>{formik.errors.name}</div> : null}
            <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
            {formik.errors.email ? <div className={f.error}>{formik.errors.email}</div> : null}
            <input id="phoneNumber" name="phoneNumber" type="tel" onChange={formik.handleChange} value={formik.values.phoneNumber}/>
            {formik.errors.phoneNumber ? <div className={f.error}>{formik.errors.phoneNumber}</div> : null}
            <select id="position" name="position" onChange={formik.handleChange} value={formik.values.position}>
                <option value="Owner">Owner</option>
                <option value="CTO">CTO</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Senior developer">Senior developer</option>
                <option value="Middle Developer">Middle Developer</option>
                <option value="Junior Developer">Junior Developer</option>
            </select>
            {formik.errors.position ? <div className={f.error}>{formik.errors.position}</div> : null}
            <button type="submit">Edit</button>
            <CloseCircleOutlined className={i.btn} onClick={endEditMode}/>
        </form>

    )
}

const validate = (values) => {
    const errors = {}
    if (!values.name) {
        errors.name = "Enter name"
    } else if (values.name > 15) {
        errors.name = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.phoneNumber) {
        errors.phoneNumber = "Enter phone number"
    }
    if (!values.position) {
        errors.position = "Choose a position"
    }
    return errors
}
const errorsMessage = (error) => {
    for (let mes in error) {
        return (
            <div className={f.error}>
                <b>{error[mes]}</b>
            </div>
        )
    }
}
