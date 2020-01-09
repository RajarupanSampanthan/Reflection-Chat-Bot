import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/messageActions';

class ChatInput extends Component {
    constructor(props) {
        super(props);
        //TODO: Must replace User with unique id
        this.state = {
            receiver: 'Bot',
            message: ''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    sendMessage = () => {
        const {receiver, message } = this.state;
        let sender = this.props.user;
        const rasaMsg = { sender, receiver, message };
        //Send message to rasa and get chatbot response
        this.props.sendMessage(rasaMsg);
        this.setState({message:''});
    };

    render() {
        return (
            <React.Fragment>
                <h2>User Input textbox</h2>
                <input
                    type="text"
                    name="message"
                    onChange={this.onChange}
                    value={this.state.message}
                    onKeyPress={event => {
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

ChatInput.propTypes = {
    sendMessage: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    user: state.sessionID.sessionID // Get unique session id to use for user each time page is loaded.
})

export default connect(mapStateToProps, { sendMessage })(ChatInput);