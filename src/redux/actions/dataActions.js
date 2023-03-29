import { ActionTypes } from "../constants/action-types";

export const setData = (data) => {
    return{
        type: ActionTypes.SET_DATA,
        payload: data
    }
}

export const selectedData = (datum) => {
    return{
        type: ActionTypes.SELECTED_DATUM,
        payload: datum
    }
}