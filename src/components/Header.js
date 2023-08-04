import React from 'react'
import Logo from '../assests/download.png'
import { useSelector } from 'react-redux'


const APIURL = 'http://127.0.0.1:8787/'

const Header = () => {
    const questions = useSelector((state) => state.addQuestion.questions)
    const saveBtnHandler = async () => {
        for (let i = 0; i < questions.length; i++) {
            await fetch(APIURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    "question": questions[i].question,
                    "type": questions[i].type,
                    "formId": +questions[i].formId,
                    "name": questions[i].name,
                    "questionId": +questions[i].questionId

                }), // body data type must match "Content-Type" header
            });
        }
    }
    return (
        <div className='text-center row' style={{ background: "beige" }}>
            <div className='col-3 mt-2 mb-2'>
                <img src={Logo} alt="" style={{ width: '50px', height: '50px', borderRadius: "8px" }} />
            </div>
            <div className='col-5'>
                <h1>GamesApp</h1>
            </div>
            <div className='col-3 mt-3 position-absolute top-0 end-0'>
                {questions.length > 0 && (<button className='btn btn-sm btn-primary' onClick={saveBtnHandler}> Save</button>)}
            </div>
        </div>
    )
}

export default Header
