import { ActionTypes } from "../constants/action-types";

const initialState = { 
    data:[]
};

export const dataReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_DATA:
            return {...state, data: payload};
        default:
            return state;;
    }
};