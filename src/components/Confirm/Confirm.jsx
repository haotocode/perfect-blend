import React, { Component } from 'react';
import './Confirm.scss';

export default class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM SEND DATA TO BACKEND HERE//
        this.props.nextStep();
    }
    back = e => {
        this.props.prevStep();
    }

    render() {
        const {brewpref, sugarnosugar, coffeecolor, flavourpref, flavourspice} = this.props;
        return (
            <div className="confirm">
                <p className="confirm__title">Confirmation of your answers:</p>
                <div className="confirm__question-container">
                    <p className="confirm__question">Brew preference</p>
                    <p className="confirm__answer">{brewpref}</p>
                </div>
                <div className="confirm__question-container">
                    <p className="confirm__question">Sugar no sugar</p>
                    <p className="confirm__answer">{sugarnosugar}</p>
                </div>
                <div className="confirm__question-container">
                    <p className="confirm__question">Coffee Color</p>
                    <p className="confirm__answer">{coffeecolor}</p>
                </div>
                <div className="confirm__question-container">
                    <p className="confirm__question">Flavour Preference</p>
                    <p className="confirm__answer">{flavourpref}</p>
                </div>
                <div className="confirm__question-container">
                    <p className="confirm__question">Flavour Spice</p>
                    <p className="confirm__answer">{flavourspice}</p>
                </div>
                <div className="confirm__btn-container">
                    <button className="confirm__btn" onClick={this.back}>← Back</button>
                    <button className="confirm__btn" onClick={this.continue}>Next →</button>
                </div>
                
            </div>
        )
    }
}
