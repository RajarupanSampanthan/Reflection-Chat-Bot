import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './SelectableCard.css';

class SelectableCard extends Component {
    render() {
        //let isSelected = this.props.selected ? "selected" : "";
        //let className = "selectable " + isSelected;
        let checkmark;
        let selectClass = "selectCard";
        if (this.props.isSelected) {
            checkmark = <div className="check"><span className="checkmark">✔</span></div>;
            selectClass = selectClass.concat(" currentSelection");
        }
        else { checkmark = null; }
        return (
            <Card className={selectClass} onClick={() => this.props.onClick(this.props.title)}>
                <Card.Body className="selectCardBody">
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text className="cardDescript">
                        {this.props.descript}
                    </Card.Text>
                    <img src={this.props.icon} className="valIcon"/>
                </Card.Body>
                {/* {checkmark} */}
            </Card>
        );
    }
};

export default SelectableCard;