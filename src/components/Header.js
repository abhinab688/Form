import React, { useEffect, useState } from 'react'
import Logo from '../assests/download.png'
import { useDispatch, useSelector } from 'react-redux';
import { setTimer } from '../redux/actions/formActions';

const APIURL = 'https://form-gamesapp.abinab.workers.dev/';
let timeCounter = 0;

const Header = () => {
    const [showSaving, setShowSaving] = useState(false)
    const questions = useSelector((state) => state.addQuestion.questions)
    const timer = useSelector((state) => state.addTimer.timer);
    const dispatch = useDispatch()
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


    if (timer == 1) {
        saveBtnHandler()
    }

    useEffect(() => {
        saveBtnHandler()
    }, [questions]);

    useEffect(() => {
        if (timer === 0) {
            setTimeout(() => {
                setShowSaving(true);
            }, 1000);
            // Show "Saving" for 1 second
        } else if (timer === 1) {
            setTimeout(() => {
                setShowSaving(false);
            }, 1000);
        }
    }, [showSaving, timer]);

    console.log(showSaving)


    return (
        <div className='text-center row' style={{ background: "beige" }}>
            <div className='col-3 mt-2 mb-2'>
                <img src={Logo} alt="" style={{ width: '50px', height: '50px', borderRadius: "8px" }} />
            </div>
            <div className='col-5'>
                <h1>GamesApp</h1>
            </div>
            { }
            <div className='col-3 mt-3 position-absolute top-0 end-0'>
                {showSaving && <p>Saving...</p>}
            </div>
        </div>
    )
}

export default Header
