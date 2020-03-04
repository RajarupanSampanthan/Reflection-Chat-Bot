import { FETCH_MESSAGES, SEND_MESSAGE, SET_LOADING } from './types';
import axios from 'axios';

export const fetchMessages = () => dispatch => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(messages =>
    //         dispatch({
    //             type: FETCH_MESSAGES,
    //             payload: messages
    //         })
    //     );
    dispatch({
        type: FETCH_MESSAGES,
        payload: null
    });
};

export const setLoading = () => dispatch => {
    dispatch({
        type: SET_LOADING,
        payload: null
    });
};

export const sendMessage = (msgData) => dispatch => {
    // Actually posts to http://localhost:5005/webhooks... but we used ngrok to make it accessible via website
    dispatch({
        type: SET_LOADING,
        payload: null
    });
    // AWS server
    
    //axios.post('https://52.14.235.139:5005/webhooks/rest/webhook', msgData)
    axios.post('https://b99e91f0.ngrok.io/webhooks/rest/webhook', msgData)
        .then(res => {
            let msgText = "";
            res.data.map((newMsg) => {
                msgText = msgText + newMsg.text + '\n';
                return msgText;
            });
            let userMsg = {sender: msgData.sender, receiver: 'Bot', message: msgData.message};
            let botMsg = {sender: 'Bot', receiver: msgData.sender, message: msgText};

            dispatch({
                type: SEND_MESSAGE,
                userMsg: userMsg,
                botMsg: botMsg
            });
        })
        .catch(err => console.log(err));
};