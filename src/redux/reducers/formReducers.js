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


export const selectedFormReducer = (state = { formId: "" }, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_FORM_ID:
            return { formId: payload }
        default:
            return state
    }
};