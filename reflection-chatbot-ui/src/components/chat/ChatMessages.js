import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/messageActions';
//import BotIcon from "./chatbot_icon.png";
import ScrollToBottom from 'react-scroll-to-bottom';
import './ChatMessages.css';
import ChatMessage from './ChatMessage/ChatMessage';
import PulseLoader from 'react-spinners/PulseLoader';

const spinnerCss = "display: table; margin: 20px auto;";
class ChatMessages extends Component {
    componentWillMount() {
        this.props.fetchMessages();
    }
    render() {
        let spinner;
    if (this.props.loading) {
      spinner = <PulseLoader css={spinnerCss} color={"#39c6b6"} />;
    } else {
      spinner = null;
    }
        return (
            <React.Fragment>
                <ScrollToBottom className="messagesDisplay" scrollViewClassName="msgScroll">
                {this.props.messages.map(msg => <div key={msg.id}><ChatMessage msg={msg}/></div>)}
                {spinner}
                </ScrollToBottom>
                
                
                {/* <div className="container">
                    <div className="chat-container">
                        <div className="chat-display">
                            <div className="chats">
                                <div className="msg-display">

                                    {this.props.messages.map(msg => {
                                        if (msg.sender == "Bot") {
                                            return (<div className="bot-messages">
                                                <div className="bot-messages-img">
                                                    <img src={BotIcon} />
                                                </div>
                                                <div className="bot-msg">
                                                    <div className="bot-msg-text">
                                                        <p className="display-linebreak">{msg.message}</p>
                                                    </div>
                                                </div>
                                            </div>)
                                        }
                                        else {
                                            return (
                                                <div className="user-messages">
                                                    <div className="user-msg">
                                                        <div className="user-msg-text">
                                                            <p className="display-linebreak">{msg.message}</p>
                                                        </div>
                                                    </div>
                                                    <div className="user-messages-img">
                                                        <img src={BotIcon} />
                                                    </div>
                                                </div>
                                            )
                                        }
                                        // <tr key={msg.id}>
                                        //     <td>{msg.id}</td>
                                        //     <td>{msg.sender}</td>
                                        //     <td>{msg.receiver}</td>
                                        //     <td className="display-linebreak">{msg.message}</td>
                                        //     <td>
                                        //     </td>
                                        // </tr>
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <table className="table table-striped">
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
                        {this.props.messages.map(msg => (
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
                </table> */}
            </React.Fragment>
        );
    }
}

ChatMessages.propTypes = {
    fetchMessages: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    messages: state.messages.messages,
    loading: state.messages.loading
})

export default connect(mapStateToProps, { fetchMessages })(ChatMessages);