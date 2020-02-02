import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './SelectableCard.css';

class SelectableCard extends Component {
    render() {
        //let isSelected = this.props.selected ? "selected" : "";
        //let className = "selectable " + isSelected;
        let checkmark;
        if (this.props.isSelected) {
            checkmark = <div className="check"><span className="checkmark">✔</span></div>;
        }
        else { checkmark = null; }
        return (
            <Card className="selectCard" onClick={() => this.props.onClick(this.props.title)}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.descript}
                    </Card.Text>
                </Card.Body>
                {checkmark}
            </Card>
        );
    }
};

export default SelectableCard;