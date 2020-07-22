import React, { Component } from 'react';
import './FormFlavourPref.scss';

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
            <div className="flavourpref">
                 <p className="flavourpref__question">How light or dark do you like your coffee?</p>
                 <span className="flavourpref__select-condition">selection one:</span>
                 <form action="">
                     <div className="flavourpref__option-container">
                        <input type="checkbox" onChange = {handleChange('flavourpref')}
                        defaultValue={values.flavourpref} change={toggleChange} value="Floral"/>
                        <label className="flavourpref__label">Floral</label>
                     </div>
                     <div className="flavourpref__option-container">
                        <input type="checkbox" onChange = {handleChange('flavourpref')}
                        defaultValue={values.flavourpref} change={toggleChange} value="Fruity"/>
                        <label className="flavourpref__label">Fruity</label>
                     </div>
                     <div className="flavourpref__option-container">
                        <input type="checkbox" onChange = {handleChange('flavourpref')}
                        defaultValue={values.flavourpref} change={toggleChange} value="Earthy"/>
                        <label className="flavourpref__label">Earthy</label>
                     </div>
                     <div className="flavourpref__option-container">
                        <input type="checkbox" onChange = {handleChange('flavourpref')}
                        defaultValue={values.flavourpref} change={toggleChange} value="Chocolatey"/>
                        <label className="flavourpref__label">Chocolatey</label>
                     </div> 

                 </form>
                 <div className="flavourpref__btn-container">
                    <button className="flavourpref__btn" onClick={this.back}>← Back</button>
                    <button className="flavourpref__btn" onClick={this.continue}>Next →</button>
                 </div>
            </div>
        )
    }
}
