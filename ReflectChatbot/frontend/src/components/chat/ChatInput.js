import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { addMessage, getRasaResponse } from '../../actions/chatbot_messages';

export class ChatInput extends Component {

    state = {
        sender: 'User',
        receiver: 'Bot',
        message: ''
    };

    static propTypes = {
        addMessage: PropTypes.func.isRequired,
        getRasaResponse: PropTypes.func.isRequired
    };

    onChange = e => {
        console.log("onchange called");
        // console.log(e);
        console.log(e.target);
        this.setState({ [e.target.name]: e.target.value });
    };

    sendMessage = () => {
        console.log('submit');
        const {sender, receiver, message } = this.state;
        const msg = { sender, receiver, message };
        const rasaMsg = { sender, message };
        this.props.addMessage(msg);
        this.props.getRasaResponse(rasaMsg);
        // let newMsgs = this.sendToRasa(rasaMsg);
        // console.log("NewMsgs2: "+ newMsgs)
        this.setState({sender: 'User', receiver: 'Bot', message:''});
    };

    sendToRasa = (msg) => {
        try {
            const response = axios.post('http://localhost:5005/webhooks/rest/webhook', msg);
            console.log("Response: "+ response);
            let newMsgs = response.data.map((newMsg) => newMsg.text);
            console.log("NewMsgs: "+ newMsgs);
            return newMsgs
        } catch (e) {
            console.log(e)
        }
        // const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', msg)
        // .then(res => {
        //     let newMessages = res.data.map((newMsg) => newMsg.text)
        //     console.log("NewMsgs: "+newMessages)
        //     return newMessages
            
        // })
        // .catch(err => console.log(err));
        
    }

    render() {
        const { sender, receiver, message } = this.state;
        return (
            <React.Fragment>
                <h2>User Input textbox</h2>
                <input
                    type="text"
                    name="message"
                    onChange={this.onChange}
                    value={message}
                    onKeyPress={ e => {
                        if (event.key === 'Enter') {
                            this.sendMessage();
                        };
                    }}
                />
                <button onClick={this.sendMessage} className="btn btn-primary">Submit</button>
            </React.Fragment>
        );
    };
};

export default connect(null, { addMessage, getRasaResponse })(ChatInput);