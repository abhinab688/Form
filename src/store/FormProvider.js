import React, { useState } from 'react'
import FormContext from './Form-Context'

const FormProvider = (props) => {

    const [newForm, setNewForm] = useState(false)
    const [formId, setFormId] = useState()

    const setNewFormHandler = () => {
        setNewForm(true)
    }

    const setFormIdhandler = (id) => {
        setFormId(id)
    }

    const formCntx = {
        newForm: newForm,
        formId: formId,
        setFormId: setFormIdhandler,
        setNewForm: setNewFormHandler

    }
    return (
        <FormContext.Provider value={formCntx}>{props.children}</FormContext.Provider>
    )
}

export default FormProvider
