import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMessage } from '../../actions/chatbot_messages';

export class ChatInput extends Component {

    state = {
        sender: 'User',
        receiver: 'Bot',
        message: ''
    };

    static propTypes = {
        addMessage: PropTypes.func.isRequired
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
        this.props.addMessage(msg);
        this.setState({message:''});
    };

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

export default connect(null, { addMessage })(ChatInput);