import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/messageActions';
import SelectableCard from './selectableCard/SelectableCard';
import './ValueSelection.css';
import Button from 'react-bootstrap/Button';


let values = [{
    name: "Achievement",
    descript: "to have important accomplishments"
},
{
    name: "Family",
    descript: "to have a happy, loving family"
},
{
    name: "Fun/Adventure",
    descript: "to play and have fun; to have new and exciting experiences"
},
{
    name: "Physical Health",
    descript: "to be physically well and healthy"
},
{
    name: "Mental Health",
    descript: "to be mentally well and healthy"
},
{
    name: "Independence",
    descript: "to be free from depending on others"
},
{
    name: "Purpose",
    descript: "to have meaning and direction in my life"
},
{
    name: "Self-esteem",
    descript: "to feel good about myself"
},
{
    name: "Wealth",
    descript: "to have plenty of money"
},
{
    name: "Friendship",
    descript: "to have close, supportive friends"
},
{
    name: "Virtue / Morality",
    descript: "to live a morally pure and excellent life"
},
{
    name: "Romance",
    descript: "to have intense, exciting love in my life"
},
{
    name: "Responsibility",
    descript: "to make and carry out responsible decisions"
},
{
    name: "Knowledge",
    descript: "to learn and contribute valuable knowledge"
},
{
    name: "Acceptance",
    descript: "to be accepted as I am"
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
                                <SelectableCard isSelected={this.state.chosenVals.includes(value.name)} onClick={this.selectVal} title={value.name} descript={value.descript} />
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