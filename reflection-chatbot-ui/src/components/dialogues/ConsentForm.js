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
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
        </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="agreeBtn" onClick={handleClose}>I Agree</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConsentForm;