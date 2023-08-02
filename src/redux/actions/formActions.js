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

export const removeForm = () => {
    return {
        type: ActionTypes.REMOVE_FORM
    }
}