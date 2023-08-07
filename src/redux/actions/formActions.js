import { ActionTypes } from "../contants/action-types";

export const setForm = (ids) => {
    return {
        type: ActionTypes.SET_FORM,
        payload: ids
    }
}

export const setFormId = (id) => {
    return {
        type: ActionTypes.SET_FORM_ID,
        payload: id
    }
}

export const setFormTitle = (title) => {
    return {
        type: ActionTypes.SET_FORM_TITLE,
        payload: title
    }
}

export const removeForm = () => {
    return {
        type: ActionTypes.REMOVE_FORM
    }
}

export const addQuestionInput = (id) => {
    return {
        type: ActionTypes.ADD_FORM_INPUT,
        payload: id
    }
}

export const removeQuestions = () => {
    return {
        type: ActionTypes.REMOVE_QUESTION
    }
}

export const deleteQuestion = (id) => {
    return {
        type: ActionTypes.DELETE_QUESTION,
        payload: id
    }
}

export const setQuestion = (id, question) => {
    return {
        type: ActionTypes.SET_QUESTION,
        payload: { id, question }
    }
}

export const setTimer = (timer) => {
    return {
        type: ActionTypes.SET_TIMER,
        payload: timer
    }
}