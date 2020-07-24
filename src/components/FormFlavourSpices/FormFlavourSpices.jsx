import React, { Component } from 'react';
import Typist from 'react-typist';
import './FormFlavourSpices.scss';

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
        const {values, handleChange, toggleChange, flavourspice, step} = this.props;

        return (
            <div className="flavourspice">
                <p className="flavourspice__step">{step} of 5</p>
                <Typist avgTypingDelay={10} cursor={{show: false}}>
                    <p className="flavourspice__question">Which herb or spice are you most drawn to?</p>
                    <Typist.Delay ms={200} />
                <span className="flavourspice__select-condition">selection one:</span>
                 <form action="">
                     <div className="flavourspice__option-container">
                        <input type="checkbox" onChange = {handleChange('flavourspice')}
                        defaultValue={values.flavourspice} change={toggleChange} value="Cinnamon"/>
                        <label className="flavourspice__label">Cinnamon</label>
                     </div>
                     <div className="flavourspice__option-container">
                        <input type="checkbox" onChange = {handleChange('flavourspice')}
                        defaultValue={values.flavourspice} change={toggleChange} value="Cardamon"/>
                        <label className="flavourspice__label">Cardamon</label>
                     </div>
                     <div className="flavourspice__option-container">
                        <input type="checkbox" onChange = {handleChange('flavourspice')}
                        defaultValue={values.flavourspice} change={toggleChange} value="Basil"/>
                        <label className="flavourspice__label">Basil</label>
                     </div>
                     <div className="flavourspice__option-container">
                        <input type="checkbox" onChange = {handleChange('flavourspice')}
                        defaultValue={values.flavourspice} change={toggleChange} value="Parsley"/>
                        <label className="flavourspice__label">Parsley</label>
                     </div>
                    
                    
                 </form>
                 <div className="flavourspice__btn-container">
                    <button className="flavourspice__btn"  onClick={this.back}>← Back</button>
                    <button className="flavourspice__btn"  onClick={this.continue}>Next →</button>
                 </div>
                 </Typist>
            </div>

            // no animation

        //     <div className="flavourspice">
        //     <span>{step} of 5</span>
        //     <p className="flavourspice__question">Which herb or spice are you most drawn to?</p>
        //     <span className="flavourspice__select-condition">selection one:</span>
        //      <form action="">
        //          <div className="flavourspice__option-container">
        //             <input type="checkbox" onChange = {handleChange('flavourspice')}
        //             defaultValue={values.flavourspice} change={toggleChange} value="Cinnamon"/>
        //             <label className="flavourspice__label">Cinnamon</label>
        //          </div>
        //          <div className="flavourspice__option-container">
        //             <input type="checkbox" onChange = {handleChange('flavourspice')}
        //             defaultValue={values.flavourspice} change={toggleChange} value="Cardamon"/>
        //             <label className="flavourspice__label">Cardamon</label>
        //          </div>
        //          <div className="flavourspice__option-container">
        //             <input type="checkbox" onChange = {handleChange('flavourspice')}
        //             defaultValue={values.flavourspice} change={toggleChange} value="Basil"/>
        //             <label className="flavourspice__label">Basil</label>
        //          </div>
        //          <div className="flavourspice__option-container">
        //             <input type="checkbox" onChange = {handleChange('flavourspice')}
        //             defaultValue={values.flavourspice} change={toggleChange} value="Parsley"/>
        //             <label className="flavourspice__label">Parsley</label>
        //          </div>
                
                
        //      </form>
        //      <div className="flavourspice__btn-container">
        //         <button className="flavourspice__btn"  onClick={this.back}>← Back</button>
        //         <button className="flavourspice__btn"  onClick={this.continue}>Next →</button>
        //      </div>
        // </div>
        )
    }
}
