import { GET_MESSAGES, DELETE_MESSAGE, ADD_MESSAGE, GET_RASA_RESPONSE } from "../actions/types.js";

const initialState = {
    messages: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(msg => msg.id !== action.payload)
            };
        case ADD_MESSAGE:
            console.log(action.payload)
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };
        case GET_RASA_RESPONSE:
            return {
                ...state
            }
        default:
            return state;
    }
}