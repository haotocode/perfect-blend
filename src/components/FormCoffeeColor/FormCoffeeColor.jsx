import React, { Component } from 'react';
import './FormCoffeeColor.scss';

export default class FormCoffeeColor extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange, toggleChange, coffeecolor} = this.props;

        return (
            <div className="coffeecolor">
                <p className="coffeecolor__question">How light or dark do you like your coffee?</p>
                <span className="coffeecolor__select-condition">Use slider:</span>
                <form action="" className="coffeecolor__form">
                    <div className="coffeecolor__option-container">
                        <label>Light</label>
                        <input type="range" min="0" max="5" onChange={handleChange('coffeecolor')} defaultValue={values.coffeecolor} change={toggleChange} />
                        <label>Dark</label>
                    </div>
                </form>
                <div className="coffeecolor__btn-container">
                    <button className="coffeecolor__btn" onClick={this.back}>← Back</button>
                    <button className="coffeecolor__btn" onClick={this.continue}>Next →</button>
                </div>
            </div>
        )
    }
}
