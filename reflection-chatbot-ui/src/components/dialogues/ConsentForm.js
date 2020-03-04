import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ConsentForm.css';

const ConsentForm = ({ handleClose, show }) => {
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={handleClose}
            backdrop='static'
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Reflection Chatbot Consent Form
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='display-linebreak-consentForm'>
                I would like to invite you to participate in my project, as part of the University of Toronto’s
Engineering Capstone Design Project. Please read the explanation about the project and its risks and benefits before you decide if you would like to participate. Feel free to ask me any
questions you would like clarified before making a decision. </p>
<p className='display-linebreak-consentForm'>
Our goal for this project is to create a chat-bot that is able to help a person reflect on their actions and values. The goal of the chatbot is to make the user realize if their actions and values are in line or not.  The goal of this research is to see how you react to different situations and what kind of responses the users offer. This will allow  the investigators to improve the bot, and to measure how users respond to it. 
</p>
<p className='display-linebreak-consentForm'>
You will be required to talk to the bot.  You may converse with the bot as long as you want. The questions the bot asks may cause cause emotional discomfort in some individuals, when they talk about topics sensitive for them. 
</p>
<p className='display-linebreak-consentForm'>
Your participation is voluntary and you may decline to participate. Also, you may withdraw at any time without any negative consequences. All information obtained will be held in strict confidence. Logs of the conversation will  be kept, but personally identifying information will not be recorded. You may receive a  transcript of your conversation at any time. Please understand that there is no compensation for participating in this experiment.
</p>
<p className='display-linebreak-consentForm'>
If you have any questions or concerns, you can contact me at
rajarupan.sampanthan@mail.utoronto.ca. You can also contact the Office of Research Ethics at the University of Toronto at ethics.review@utoronto.ca or at 416-946-3273.
</p>
<p className='display-linebreak-consentForm'>
By signing below, you are indicating that you have carefully read the information provided
above and are agreeing to participate in the experiment.

        </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="agreeBtn" onClick={handleClose}>I Agree</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConsentForm;