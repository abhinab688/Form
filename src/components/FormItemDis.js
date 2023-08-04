import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const FormItemDis = () => {
    const forms = useSelector((state) => state.allForms.forms)
    const formList = forms.map((form) => {
        const {formId, name } = form
        return (
            <div key={formId} className='shadow-lg p-0 mb-1 bg-body rounded'>
                <Link to={`/form/${formId}`}>
                    <div className='bg-dark bg-gradient text-white row' style={{ borderRadius: "8px" }} >
                        <h3 className='p-3 col-9'>{name}</h3> <p className='col-3 p-3'>Click to open</p>
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
