import React, { Component } from 'react'

export default class FormFlavourPref extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange, toggleChange, flavourpref} = this.props;
        return (
            <div>
                 <p>How light or dark do you like your coffee?? </p>
                 <form action="">
                    <label>Floral</label>
                    <input type="checkbox" onChange = {handleChange('flavourpref')}
                    defaultValue={values.flavourpref} change={toggleChange} value="Floral"/>
                     <label>Fruity</label>
                    <input type="checkbox" onChange = {handleChange('flavourpref')}
                    defaultValue={values.flavourpref} change={toggleChange} value="Fruity"/>
                     <label>Earthy</label>
                    <input type="checkbox" onChange = {handleChange('flavourpref')}
                    defaultValue={values.flavourpref} change={toggleChange} value="Earthy"/>
                     <label>Chocolatey</label>
                    <input type="checkbox" onChange = {handleChange('flavourpref')}
                    defaultValue={values.flavourpref} change={toggleChange} value="Chocolatey"/>
                    <button onClick={this.continue}>Next</button>
                    <button onClick={this.back}>Back</button>
                 </form>
            </div>
        )
    }
}
