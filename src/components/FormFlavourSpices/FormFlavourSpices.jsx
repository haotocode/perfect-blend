import React, { Component } from 'react'

export default class FormFlavourSpices extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange, toggleChange, flavourspice} = this.props;

        return (
            <div>
                <p>Which herb or spice are you most drawn to? </p>
                 <form action="">
                    <label>Cinnamon</label>
                    <input type="checkbox" onChange = {handleChange('flavourspice')}
                    defaultValue={values.flavourspice} change={toggleChange} value="Cinnamon"/>
                    <label>Cardamon</label>
                    <input type="checkbox" onChange = {handleChange('flavourspice')}
                    defaultValue={values.flavourspice} change={toggleChange} value="Cardamon"/>
                    <label>Basil</label>
                    <input type="checkbox" onChange = {handleChange('flavourspice')}
                    defaultValue={values.flavourspice} change={toggleChange} value="Basil"/>
                    <label>Parsley</label>
                    <input type="checkbox" onChange = {handleChange('flavourspice')}
                    defaultValue={values.flavourspice} change={toggleChange} value="Parsley"/>
                    <button onClick={this.continue}>Next</button>
                    <button onClick={this.back}>Back</button>
                 </form>
            </div>
        )
    }
}
