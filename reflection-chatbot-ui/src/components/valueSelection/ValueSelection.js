import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/messageActions';
import SelectableCard from './selectableCard/SelectableCard';
import './ValueSelection.css';
import Button from 'react-bootstrap/Button';
import AchieveIcon from './ValueIcons/AchievementIcon.png';
import FamilyIcon from './ValueIcons/family.png';
import AdventureIcon from './ValueIcons/fun.png';
import HealthIcon from './ValueIcons/health.png';
import MindfulnessIcon from './ValueIcons/mindfulness.png';
import IndependenceIcon from './ValueIcons/independence.png';
import PurposeIcon from './ValueIcons/purpose.png';
import SelfEsteemIcon from './ValueIcons/self-esteem.png';
import WealthIcon from './ValueIcons/wealth.png';
import FriendshipIcon from './ValueIcons/friendship.png';
import MoralityIcon from './ValueIcons/morality.png';
import RomanceIcon from './ValueIcons/romance.png';
import ResponsibilityIcon from './ValueIcons/Responsibility.png';
import KnowledgeIcon from './ValueIcons/knowledge.png';
import AcceptanceIcon from './ValueIcons/acceptance.png';

let values = [{
    name: "Achievement",
    descript: "to have important accomplishments",
    icon: AchieveIcon
},
{
    name: "Family",
    descript: "to have a happy, loving family",
    icon: FamilyIcon
},
{
    name: "Fun",
    descript: "to play and have fun; to have new and exciting experiences",
    icon: AdventureIcon
},
{
    name: "Physical Health",
    descript: "to be physically well and healthy",
    icon: HealthIcon
},
{
    name: "Mindfulness",
    descript: "to be mentally well and healthy",
    icon: MindfulnessIcon
},
{
    name: "Independence",
    descript: "to be free from depending on others",
    icon: IndependenceIcon
},
{
    name: "Purpose",
    descript: "to have meaning and direction in my life",
    icon: PurposeIcon
},
{
    name: "Self-esteem",
    descript: "to feel good about myself",
    icon: SelfEsteemIcon
},
{
    name: "Wealth",
    descript: "to have plenty of money",
    icon: WealthIcon
},
{
    name: "Friendship",
    descript: "to have close, supportive friends",
    icon: FriendshipIcon
},
{
    name: "Morality",
    descript: "to live a morally pure and excellent life",
    icon: MoralityIcon
},
{
    name: "Romance",
    descript: "to have intense, exciting love in my life",
    icon: RomanceIcon
},
{
    name: "Responsibility",
    descript: "to make and carry out responsible decisions",
    icon: ResponsibilityIcon
},
{
    name: "Knowledge",
    descript: "to learn and contribute valuable knowledge",
    icon: KnowledgeIcon
},
{
    name: "Acceptance",
    descript: "to be accepted as I am",
    icon: AcceptanceIcon
}];
var maxValuesAllowed = 3;

class ValueSelection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chosenVals: [],
            numChosen: 0
        };
    }

    selectVal = (valName) => {
        let currentVals = this.state.chosenVals;
        let currentNum = this.state.numChosen;

        // Check if we are selecting or deselecting
        let isDeselect = this.state.chosenVals.includes(valName);

        if (isDeselect) {
            // Delete the entry from the array
            let newValsList = [...currentVals];
            let idx = newValsList.indexOf(valName);
            if (idx !== -1) {
                newValsList.splice(idx, 1);
                currentNum = currentNum - 1;
                this.setState({chosenVals: newValsList, numChosen: currentNum});
            }
        }
        else {
            if (currentNum === maxValuesAllowed) {
                let newValsList = [...currentVals, valName];
                newValsList.shift();
                this.setState({ chosenVals: newValsList });
            }
            else {
                let newValsList = [...currentVals, valName];
                currentNum = currentNum + 1;
                this.setState({ chosenVals: newValsList, numChosen: currentNum });
            }
        }
    };

    sendValues = () => {
        let sender = this.props.user;
        let receiver = 'Bot';
        let message = this.state.chosenVals.join(', ');
        const rasaMsg = { sender, receiver, message };
        //Send message to rasa and get chatbot response
        this.props.sendMessage(rasaMsg);
        this.props.exitValueSelect();
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <h3 className='intro' >Welcome to the Reflection Chatbot! <br />Please select the 3 values that are most important to you to begin.</h3>
                    <div className='cardDisplay'>
                        {values.map((value) => (
                            <div key={value.name}>
                                <SelectableCard isSelected={this.state.chosenVals.includes(value.name)} onClick={this.selectVal} title={value.name} descript={value.descript} icon={value.icon}/>
                            </div>
                        ))}
                    </div>
                    <Button disabled={this.state.numChosen !== maxValuesAllowed} onClick={this.sendValues} className="valSubmitBtn">Submit Values</Button>

                </div>

            </React.Fragment>
        )
    };
};

ValueSelection.propTypes = {
    sendMessage: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    user: state.sessionID.sessionID // Get unique session id to use for user each time page is loaded.
})

export default connect(mapStateToProps, { sendMessage })(ValueSelection);