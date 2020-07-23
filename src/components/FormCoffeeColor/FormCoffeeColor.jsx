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
        const {values, handleChange, toggleChange, coffeecolor, step} = this.props;

        return (
            <div className="coffeecolor">
                <span>{step} of 5</span>
                <p className="coffeecolor__question">How light or dark do you like your coffee?</p>
                <div className="coffecolor__option-bg-container">
                    <div className="coffeecolor__value-container">
                        <span>1 =</span>
                        <div className="coffeecolor__value-example coffeecolor__value-example--bg1"></div>
                    </div>
                    <div className="coffeecolor__value-container">
                        <span>2 =</span>
                        <div className="coffeecolor__value-example coffeecolor__value-example--bg2"></div>
                    </div>
                    <div className="coffeecolor__value-container">
                        <span>3 =</span>
                        <div className="coffeecolor__value-example coffeecolor__value-example--bg3"></div>
                    </div>
                    <div className="coffeecolor__value-container">
                        <span>4 =</span>
                        <div className="coffeecolor__value-example coffeecolor__value-example--bg4"></div>
                    </div>
                    <div className="coffeecolor__value-container">
                        <span>5 =</span>
                        <div className="coffeecolor__value-example coffeecolor__value-example--bg5"></div>
                    </div>
                </div>
                <span className="coffeecolor__select-condition">Use slider:</span>
                <form action="" className="coffeecolor__form">
                    <div className="coffeecolor__option-container">
                        <label>Light</label>
                        <input type="range" min="0" max="5" onChange={handleChange('coffeecolor')} defaultValue={values.coffeecolor} change={toggleChange} />
                        <label>Dark</label>
                    </div>
                    {/* <p>Current value: {coffeecolor}</p> */}
                </form>
                <div className="coffeecolor__btn-container">
                    <button className="coffeecolor__btn" onClick={this.back}>← Back</button>
                    <button className="coffeecolor__btn" onClick={this.continue}>Next →</button>
                </div>
            </div>
        )
    }
}
