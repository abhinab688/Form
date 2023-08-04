import React, { useEffect } from 'react'
import FormItemDis from './FormItemDis';
import { useDispatch } from 'react-redux';
import { setForm, setFormId, removeForm } from '../redux/actions/formActions';
import { Link } from 'react-router-dom';

const CreateForm = () => {
    const dispatch = useDispatch()

    const fetchForms = async () => {
        const response = await fetch('http://127.0.0.1:8787/distinct').catch(err => console.log(err))
        const jsonRes = await response.json()
        dispatch(setForm(jsonRes.data.data))
        console.log(jsonRes)

    }

    const formId = Math.floor(10000 + Math.random() * 90000);

    useEffect(() => {
        fetchForms()
        return () => {
            dispatch(removeForm())
        }
    }, [])


    const onClickHandler = () => {
        console.log(formId)
        dispatch(setFormId(formId))
    }
    return (
        <>
            <div className='text-center m-5'>
                <Link to={`/form/${formId}`} className='btn btn-danger' onClick={onClickHandler}>Create New Form</Link>

            </div>
            <div className='text-center m-5'>
                <div>
                    <h2>Forms</h2>
                </div>
                <FormItemDis />
            </div>
        </>
    )
}

export default CreateForm
