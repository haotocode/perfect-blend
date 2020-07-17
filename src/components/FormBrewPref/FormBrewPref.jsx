import React, { Component } from 'react'

export default class FormBrewPref extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        const {values, handleChange, toggleChange, brewpref} = this.props;

        return (
            <div>
                <p>What is your brew preference</p>
                <form action="">
                    <label>Drip</label>
                    <input type="checkbox" onChange = {handleChange('brewpref')}
                    defaultValue={values.brewpref} checked = {this.props.isChecked} value="Drip"/>
                    <label>French Press</label>
                    <input type="checkbox" onChange = {handleChange('brewpref')}
                    defaultValue={values.brewpref} checked = {this.props.isChecked} value="French Press"/>
                    <label>Coffee maker</label>
                    <input type="checkbox" onChange = {handleChange('brewpref')}
                    defaultValue={values.brewpref} checked = {this.props.isChecked} value="Coffee maker"/>
                    <label>AeroPress</label>
                    <input type="checkbox" onChange = {handleChange('brewpref')}
                    defaultValue={values.brewpref} checked = {this.props.isChecked} value="AeroPress"/>
                </form>
                <button onClick={this.continue}>Next</button>
            </div>
        )
    }
}
