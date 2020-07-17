import React, { Component } from 'react'

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
            <div>
                <p>How light or dark do you like your coffee?? </p>
                <form action="">
                    {/* <label>Light</label>
                    <input type="checkbox" onChange = {handleChange('coffeecolor')}
                    defaultValue={values.coffeecolor} change={toggleChange} value="Light"/>
                    <br/> */}
                    <label>Light</label>
                    <input type="range" 
                    min="0"
                    max="5"
                    onChange = {handleChange('coffeecolor')}
                    defaultValue={values.coffeecolor} change={toggleChange} value="Light"/>
                    <label>Dark</label>
                </form>
                <button onClick={this.continue}>Next</button>
                <button onClick={this.back}>Back</button>

            </div>
        )
    }
}
