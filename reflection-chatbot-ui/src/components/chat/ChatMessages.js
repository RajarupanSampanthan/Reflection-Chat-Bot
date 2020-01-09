import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/messageActions';
import './ChatMessages.css';

class ChatMessages extends Component {
    componentWillMount() {
        this.props.fetchMessages();
    }
    render() {
        return (
            <React.Fragment>
                <h2 style={{margin:"10px auto", float:"left"}}>Chat Messages</h2>
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
                                <td className="display-linebreak">{msg.message}</td>
                                <td>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

ChatMessages.propTypes = {
    fetchMessages: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    messages: state.messages.messages
})

export default connect(mapStateToProps, { fetchMessages })(ChatMessages);