import { ActionTypes } from "../contants/action-types";

const initialState = {
    forms: [],
}

export const formReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_FORM:
            return { ...state, forms: payload }
        default:
            return state
    }
}

export const setTimeReducer = (state = { timer: "" }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TIMER:
            return { timer: payload }
        default:
            return state
    }
}

export const selectedFormReducer = (state = { formId: "", formTitle: "", question: "", type: "" }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_FORM_ID:
            return { formId: payload }
        case ActionTypes.SET_FORM_TITLE:
            return { formTitle: payload }
        case ActionTypes.REMOVE_FORM:
            return {}
        case ActionTypes.REMOVE_FORM:
            return {}
        default:
            return state
    }
};

const questionInputInitialState = {
    questions: []
}

export const addQuestionInputReducer = (state = questionInputInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_FORM_INPUT:
            if (Array.isArray(payload)) {
                return { ...state, questions: payload };
            } else {

                return { ...state, questions: [...state.questions, payload] };
            }
        case ActionTypes.DELETE_QUESTION:
            if (state.questions.indexOf(payload) > -1) {
                console.log("inside delete question")
                let index = state.questions.indexOf(payload)
                console.log(index)
                console.log(state.questions)
                //state.questions.splice(index, 1)
                return { ...state, questions: [...state.questions.slice(0, index), ...state.questions.slice(index + 1)] }

            }
            return { ...state }

        default:
            return state;
    }
}
