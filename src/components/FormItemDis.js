import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const FormItemDis = () => {
    const forms = useSelector((state) => state.allForms.forms)
    const formList = forms.map((form) => {
        const { type, formId } = form
        return (
            <div key={formId}>
                <Link to={`/form/${formId}`}>
                    <div className='bg-dark bg-gradient text-white' >
                        <p>{type}---{formId}</p>
                    </div>
                </Link>
            </div>

        )
    })
    return (
        <>
            {formList}
        </>
    )
}

export default FormItemDis
