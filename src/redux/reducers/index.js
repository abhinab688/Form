import { combineReducers } from "redux";
import { formReducer, selectedFormReducer, addQuestionInputReducer, setTimeReducer } from "./formReducers";

const reducers = combineReducers({
    allForms: formReducer,
    form: selectedFormReducer,
    addQuestion: addQuestionInputReducer,
    addTimer: setTimeReducer
})

export default reducers;