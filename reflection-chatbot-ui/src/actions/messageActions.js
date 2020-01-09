import { FETCH_MESSAGES, SEND_MESSAGE } from './types';
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

export const sendMessage = (msgData) => dispatch => {
    // Actually posts to http://localhost:5005/webhooks... but we used ngrok to make it accessible via website
    axios.post('https://ba85e1fd.ngrok.io/webhooks/rest/webhook', msgData)
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