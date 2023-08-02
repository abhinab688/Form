import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setForm, removeForm } from '../redux/actions/formActions';

const Form = () => {
    const [question, setQuestion] = useState()
    const [type, setType] = useState("Short Answer")
    const forms = useSelector((state) => state.allForms.forms)
    const dispatch = useDispatch()
    const { formId } = useParams()

    const fetchFormData = async () => {
        const data = await fetch(`https://form-gamesapp.abinab.workers.dev?formId=${formId}`).catch(err => console.log(err))
        const jsonData = await data.json()
        console.log(jsonData)
        dispatch(setForm(jsonData.data.data.documents))
    }

    useEffect(() => {
        fetchFormData()
        return () => {
            dispatch(removeForm())
        }
    }, [forms.length])

    const formSubmitHandler = async (e) => {
        await fetch("https://form-gamesapp.abinab.workers.dev/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                "question": question,
                "type": type,
                "formId": +formId
            }), // body data type must match "Content-Type" header
        });
    }
    const questionChangeHandler = (e) => {
        setQuestion(e.target.value)
    }

    const typeChangehandler = (e) => {
        setType(e.target.value)
    }

    const oldFormData = forms.map(form => {
        return (
            <div className='p-3 mb-2 bg-success text-white' key={form._id}>
                <p>Question : {form.question}  - - Type : {form.type}</p>
            </div>
        )
    })

    return (
        <div className="text-center container">
            <h1>GamesApp</h1>
            {forms.length === 0 ?
                <form onSubmit={formSubmitHandler}>
                    <div className="form-group">
                        <label >Enter your Question here.</label>
                        <input name='question' type="text" className="form-control" placeholder="Question ???" onChange={questionChangeHandler} required id="question" />
                    </div>
                    <div className="form-group">
                        <label>Select your question type.</label>
                        <select name='type' className="form-control" id="exampleFormControlSelect1" onChange={typeChangehandler}>
                            <option value={"Short Answer"}>Short Answer</option>
                            <option value={"Rating"}>Rating</option>
                        </select>
                    </div>
                    <button className='m-2 btn btn-dark'>Submit</button>
                </form> :
                <div>
                    <form onSubmit={formSubmitHandler}>
                        <div className="form-group">
                            <label >Enter your Question here.</label>
                            <input name='question' type="text" className="form-control" id="exampleFormControlInput1" placeholder="Question ???" onChange={questionChangeHandler} />
                        </div>
                        <div className="form-group">
                            <label>Select your question type.</label>
                            <select name='type' className="form-control" id="exampleFormControlSelect1" onChange={typeChangehandler}>
                                <option value={"Short Answer"}>Short Answer</option>
                                <option value={"Rating"}>Rating</option>
                            </select>
                        </div>
                        <button className='m-2 btn btn-dark'>Submit</button>
                    </form>
                    <div>
                        {oldFormData}
                    </div>
                </div>
            }

        </div>
    )
}

export default Form
