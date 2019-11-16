import React from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

export default function ChatPanel() {
    return (
        <React.Fragment>
            <ChatMessage />
            <ChatInput/>
        </React.Fragment>
    )
}