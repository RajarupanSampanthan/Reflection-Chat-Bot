import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/messageActions';
import SelectableCard from './selectableCard/SelectableCard';
import './ValueSelection.css';
import Button from 'react-bootstrap/Button';


let values = [{
    name: "Achievement",
    descript: "some descript"
},
{
    name: "Family",
    descript: "some descript"
},
{
    name: "Fun/Adventure",
    descript: "some descript"
},
{
    name: "Physical Health",
    descript: "some descript"
},
{
    name: "Mental Health",
    descript: "some descript"
},
{
    name: "Independence",
    descript: "some descript"
},
{
    name: "Purpose",
    descript: "some descript"
},
{
    name: "Self-esteem",
    descript: "some descript"
},
{
    name: "Wealth",
    descript: "some descript"
},
{
    name: "Friendship",
    descript: "some descript"
},
{
    name: "Virtue / Morality",
    descript: "some descript"
},
{
    name: "Romance",
    descript: "some descript"
},
{
    name: "Responsibility",
    descript: "some descript"
},
{
    name: "Knowledge",
    descript: "some descript"
},
{
    name: "Acceptance",
    descript: "some descript"
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