import React from 'react';
import Button from 'react-bootstrap/Button';

const LandingPage = ({ startChat }) => {
    return (
        <React.Fragment>
            <div>
                This is my landing page!!! :)

            </div>
            <Button className="startChatBtn" onClick={startChat}>Start Conversation</Button>

        </React.Fragment>
    );
};

export default LandingPage;