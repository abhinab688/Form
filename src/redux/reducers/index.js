import { combineReducers } from "redux";
import { formReducer, selectedFormReducer } from "./formReducers";

const reducers = combineReducers({
    allForms: formReducer,
    form: selectedFormReducer
})

export default reducers;