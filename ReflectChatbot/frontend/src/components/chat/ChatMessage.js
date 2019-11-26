import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMessages, deleteMessage } from '../../actions/chatbot_messages';

export class ChatMessage extends Component {
    static propTypes = {
        messages: PropTypes.array.isRequired,
        getMessages: PropTypes.func.isRequired,
        deleteMessage: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getMessages();
    };

    deleteAllMessages = () => {
        this.props.messages.map((msg) => {
            console.log("Deleting" + msg.id);
            this.props.deleteMessage(msg.id);
        });
    };

    render() {
        return (
            <React.Fragment>
                <h2 style={{margin:"10px auto", float:"left"}}>Chat Messages</h2>
                <button onClick={this.deleteAllMessages} className="btn btn-secondary" style={{margin:"10px auto", float:"right"}}>Clear messages</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Sender</th>
                            <th>Receiver</th>
                            <th>Message</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.messages.map(msg => (
                            <tr key={msg.id}>
                                <td>{msg.id}</td>
                                <td>{msg.sender}</td>
                                <td>{msg.receiver}</td>
                                <td>{msg.message}</td>
                                <td>
                                    <button onClick={this.props.deleteMessage.bind(this, msg.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    };
};

const mapStateToProps = state => ({
    messages: state.chatbot_messages.messages
});

export default connect(mapStateToProps, { getMessages, deleteMessage })(ChatMessage);