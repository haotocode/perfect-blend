import React, { Component } from 'react'

export default class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM SEND DATA TO BACKEND HERE//
        this.props.nextStep();
    }
    back = e => {
        // e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values : {firstName, lastName, email, occupation, city, bio, value}} = this.props;
        const {brewpref, sugarnosugar, coffeecolor, flavourpref, flavourspice} = this.props;
        return (
            <div>
                <h1>CONFIRMATION</h1>
                <div>
                    <p>Brew preference: </p>
                    <p>{brewpref}</p>
                </div>
                <div>
                    <p>Sugar no sugar:</p>
                    <p>{sugarnosugar}</p>
                </div>
                <div>
                    <p>Coffee Color</p>
                    <p>{coffeecolor}</p>
                </div>
                <div>
                    <p>Flavour Preference</p>
                    <p>{flavourpref}</p>
                </div>
                <div>
                    <p>Flavour Spice</p>
                    <p>{flavourspice}</p>
                </div>
                <button onClick={this.continue}>Next</button>
                <button onClick={this.back}>Back</button>
                
            </div>
        )
    }
}
