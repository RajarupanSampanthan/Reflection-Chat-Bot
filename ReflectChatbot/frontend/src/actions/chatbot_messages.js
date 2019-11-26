import axios from 'axios';

import { GET_MESSAGES, DELETE_MESSAGE, ADD_MESSAGE, GET_RASA_RESPONSE } from './types';

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

// GET_RASA_RESPONSE
export const getRasaResponse = (msg) => dispatch => {
    console.log("hit");
    axios.post('http://localhost:5005/webhooks/rest/webhook', msg)
        .then(res => {
            let msgText = "";
            res.data.map((newMsg) => {
                msgText = msgText + newMsg.text + '\n';
            });
            console.log("message text: " + msgText)
            let botMsg = {sender: 'Bot', receiver: 'User', message: msgText}

            axios.post('/api/chatbot_messages/', botMsg)
                .then(res => {
                    dispatch({
                        type: ADD_MESSAGE,
                        payload: res.data
                    });
                })
                .catch(err => console.log(err));

            dispatch({
                type: GET_RASA_RESPONSE,
                payload: res.data
            });

        })
        .catch(err => console.log(err));
};