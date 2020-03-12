import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LandingPage.css';
import BotIcon from '../chat/BotIcon.png';
import GoalImg from './images/purpose.png';
import ReflectionImg from './images/reflection.png';
import WorkInProgImg from './images/work_in_progress.png';


const LandingPage = ({ startChat }) => {
    return (
        <React.Fragment>
            <Container className="LPContainer">
                <div className="LPTitleAndIntro">
                    <Row>
                        <h1 className="LPPageTitle">Welcome to the Reflection Chatbot</h1>
                    </Row>
                    <Row>
                        <img className="LPBotIcon" src={BotIcon} alt="chatbot icon"/>
                    </Row>
                    <Row>
                        <p>Intro message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum blandit felis, quis facilisis enim molestie id. Suspendisse dictum orci et nisi maximus, vel maximus lacus euismod. Nunc ac euismod lectus. Mauris lobortis mauris a scelerisque rutrum. Donec vitae pretium mi. Fusce mattis maximus lorem eu malesuada. Quisque justo ipsum, placerat volutpat justo ac, pharetra tincidunt elit.</p>
                    </Row>
                </div>
                <Row>
                    <Col className='LPSectionTitle LightSection'>
                        <h2>Our Goal</h2> <br/>
                        <img src={GoalImg} alt='Goal_icon'/>
                    </Col>
                    <Col className='LPSectionContent'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum blandit felis, quis facilisis enim molestie id. Suspendisse dictum orci et nisi maximus, vel maximus lacus euismod. Nunc ac euismod lectus. Mauris lobortis mauris a scelerisque rutrum. Donec vitae pretium mi. Fusce mattis maximus lorem eu malesuada. Quisque justo ipsum, placerat volutpat justo ac, pharetra tincidunt elit.
                    </Col>
                </Row>
                <div className="LPSectionAltColour"> 
                <Row >
                    <Col className='LPSectionTitle'>
                        <h2>Background and Motivation</h2>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum blandit felis, quis facilisis enim molestie id. Suspendisse dictum orci et nisi maximus, vel maximus lacus euismod. Nunc ac euismod lectus. Mauris lobortis mauris a scelerisque rutrum. Donec vitae pretium mi. Fusce mattis maximus lorem eu malesuada. Quisque justo ipsum, placerat volutpat justo ac, pharetra tincidunt elit.</p>
                    </Col>
                </Row>
                </div>
                <Row>
                    <Col className="LPSectionContent">
                        <h2>What's in it for you?</h2>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum blandit felis, quis facilisis enim molestie id. Suspendisse dictum orci et nisi maximus, vel maximus lacus euismod. Nunc ac euismod lectus. Mauris lobortis mauris a scelerisque rutrum. Donec vitae pretium mi. Fusce mattis maximus lorem eu malesuada. Quisque justo ipsum, placerat volutpat justo ac, pharetra tincidunt elit.
                        </p>
                    </Col>
                    <Col className="LPSectionImgRight">
                        <img src={ReflectionImg} alt="reflect_icon"/>
                    </Col>
                </Row>
                <div className="LPSectionAltColour">
                <Row>
                    <Col className="LPSectionTitle">
                        <h2>Work In Progress</h2><br />
                        <img src={WorkInProgImg} alt="work_in_progress"/>
                    </Col>
                    <Col className="LPSectionContent">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum blandit felis, quis facilisis enim molestie id. Suspendisse dictum orci et nisi maximus, vel maximus lacus euismod. Nunc ac euismod lectus. Mauris lobortis mauris a scelerisque rutrum. Donec vitae pretium mi. Fusce mattis maximus lorem eu malesuada. Quisque justo ipsum, placerat volutpat justo ac, pharetra tincidunt elit.
                    </Col>
                </Row>
                <Row>
                    <Button className="startChatBtn" onClick={startChat}>Start Conversation</Button>
                </Row>
                </div>
            </Container>

        </React.Fragment>
    );
};

export default LandingPage;