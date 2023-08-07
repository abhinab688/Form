import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setForm, removeForm, setFormTitle, addQuestionInput, removeQuestions, deleteQuestion } from '../redux/actions/formActions';
import FormInputElement from './FormInputElement';
import FormTitleHeader from './FormTitleHeader';

const APIURL = 'https://form-gamesapp.abinab.workers.dev/'

const Form = () => {
    const [rerender, setRerender] = useState(0)
    const forms = useSelector((state) => state.allForms.forms)
    const questions = useSelector((state) => state.addQuestion.questions)
    const dispatch = useDispatch()
    const { formId } = useParams()

    const fetchFormData = async () => {
        const data = await fetch(APIURL + `?formId=${formId}`).catch(err => console.log(err))
        const jsonData = await data.json()
        dispatch(addQuestionInput(jsonData.data.data.documents))
        dispatch(setFormTitle(jsonData.data.data.documents.length > 0 ? jsonData.data.data.documents[0].name : ""))
    }


    useEffect(() => {
        fetchFormData()
        return () => {
            dispatch(removeQuestions())
        }
    }, [dispatch])

    useEffect(() => {
        setRerender(prevRerender => prevRerender + 1);
    }, [questions])


    return (
        <div className="text-center container">
            <FormTitleHeader formId={formId} />
            {questions.map(question => {
                return (
                    <FormInputElement key={question.questionId} id={question.questionId} />
                )
            })

            }

        </div>
    )
}

export default Form
