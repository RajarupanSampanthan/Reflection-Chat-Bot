import axios from 'axios';

import { GET_MESSAGES, DELETE_MESSAGE, ADD_MESSAGE } from './types';

// GET MESSAGES
export const getMessages = () => dispatch => {
    axios.get('/api/chatbot_messages/')
        .then(res => {
            dispatch({
                type: GET_MESSAGES,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

// DELETE MESSAGES
export const deleteMessage = id => dispatch => {
    axios.delete(`/api/chatbot_messages/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_MESSAGE,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD_MESSAGE
export const addMessage = (msg) => dispatch => {
    axios.post('/api/chatbot_messages/', msg)
        .then(res => {
            dispatch({
                type: ADD_MESSAGE,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};