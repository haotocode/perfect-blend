import React, { Component } from 'react';
import Typist from 'react-typist';
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
        const {values, handleChange, toggleChange, flavourpref, step} = this.props;
        return (
            <div className="flavourpref">
                 <p className="flavourpref__step">{step} of 5</p>
                 <Typist avgTypingDelay={10} cursor={{show: false}}>
                    <p className="flavourpref__question">Which flavours do you most enjoy in your coffee?</p>
                    <Typist.Delay ms={200} />
                 <span className="flavourpref__select-condition">select one:</span>
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
                 </Typist>
            </div>
        )
    }
}
