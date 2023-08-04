import { combineReducers } from "redux";
import { formReducer, selectedFormReducer, addQuestionInputReducer } from "./formReducers";

const reducers = combineReducers({
    allForms: formReducer,
    form: selectedFormReducer,
    addQuestion: addQuestionInputReducer
})

export default reducers;