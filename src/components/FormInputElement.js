import React, { useState, useEffect } from 'react'
import FormTitleHeader from './FormTitleHeader'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { deleteQuestion, setQuestion, setTimer } from '../redux/actions/formActions';

let APIURL = 'https://form-gamesapp.abinab.workers.dev/'

const FormInputElement = (props) => {
    const [rerender, setRerender] = useState(0)
    const timer = useSelector((state) => state.addTimer.timer);
    const questions = useSelector((state) => state.addQuestion.questions)
    const [questionText, setQuestionText] = useState();
    const { formId } = useParams();
    const dispatch = useDispatch()

    const id = props.id;
    const question = questions.find(q => q.questionId === id);

    useEffect(() => {
        question.formId = formId
        setQuestionText(question.question)
    }, []);

    const setQuestionHandler = (e) => {
        question.question = e.target.value;
        dispatch(setTimer(0))
    }

    const typeChangehandler = (e) => {
        question.type = e.target.value;
        dispatch(setTimer(0))
    }

    if (timer == 0) {
        setTimeout(() => {
            dispatch(setTimer(1))
        }, 2000)
    }


    const deleteBtnHandler = async () => {
        console.log("deleting from db")
        const res = await fetch(APIURL + `delete?questionId=${id}`).catch(err => console.log(err))
        console.log("deleted from db")
        dispatch(deleteQuestion(question))
    }


    return (
        <div>
            <div className='card mt-2 shadow p-3 mb-5 bg-white rounded' >
                <form className=''>
                    <div className="form-group row mt-2 mb-2">
                        <div className='col-8'>
                            <input
                                name='question'
                                type="text"
                                className="form-control"
                                placeholder="Question ???"
                                required key="question"
                                onChange={setQuestionHandler}
                                defaultValue={questionText}

                            />
                        </div>
                        <div className='col-4'>
                            <select name='type'
                                className="form-control"
                                id="exampleFormControlSelect1"
                                onChange={typeChangehandler}
                                defaultValue={question.type ? question.type : ""}
                            >
                                <option value={"Short Answer"}>Short Answer</option>
                                <option value={"Rating"}>Rating</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className='p-2 position-relative'>
                    <div className='position-absolute end-0 bottom-0'>
                        <i className="bi bi-trash" onClick={deleteBtnHandler}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormInputElement
