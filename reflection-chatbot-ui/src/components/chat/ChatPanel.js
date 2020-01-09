import React from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

export default function ChatPanel() {
    return (
        <React.Fragment>
            <ChatMessages />
            <ChatInput/>
        </React.Fragment>
    )
}