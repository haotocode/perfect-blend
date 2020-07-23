import React, { Component } from 'react';
import Typist from 'react-typist';
import './FormBrewPref.scss';

export default class FormBrewPref extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {

        const {values, handleChange, toggleChange, brewpref, step, checked} = this.props;

        return (
            <div className="brewpref">
                <span>{step} of 5</span>
                <Typist avgTypingDelay={10} cursor={{show: false}}>
                    <p className="brewpref__question">What is your brew preference?</p>
                    <Typist.Delay ms={200} />
                <span className="brewpref__select-condition">select one: </span>
                <form action="" className="brewpref__form">
                    <div className="brewpref__option-container">
                        <input type="checkbox" onChange = {handleChange('brewpref')} defaultValue={values.brewpref} checked = {this.props.isChecked} value="Drip"/>
                        <label className="brewpref__label">Drip</label>
                    </div>
                    <div className="brewpref__option-container">
                        <input type="checkbox" onChange = {handleChange('brewpref')} defaultValue={values.brewpref} checked = {this.props.isChecked} value="French Press"/>
                        <label className="brewpref__label">French Press</label>
                    </div>
                    <div className="brewpref__option-container">
                        <input type="checkbox" onChange = {handleChange('brewpref')}defaultValue={values.brewpref} checked = {this.props.isChecked} value="Coffee maker"/>
                        <label className="brewpref__label">Coffee Maker</label>
                    </div>
                    <div className="brewpref__option-container">
                        <input type="checkbox" onChange = {handleChange('brewpref')} defaultValue={values.brewpref} checked = {this.props.isChecked} value="AeroPress"/>
                        <label className="brewpref__label">AeroPress</label>
                    </div>
                </form>
                <div className="brewpref__btn-container">
                    <button className="brewpref__btn" onClick={this.continue}>Next →</button>
                </div>
                </Typist>
            </div>


            // without animation

        // <div className="brewpref">
        //     <span>{step} of 5</span>
        //     <p className="brewpref__question">What is your brew preference?</p>
        //     <span className="brewpref__select-condition">select one: </span>
        //     <form action="" className="brewpref__form">
        //         <div className="brewpref__option-container">
        //             <input type="checkbox" onChange = {handleChange('brewpref')} defaultValue={values.brewpref} checked = {this.props.isChecked} value="Drip"/>
        //             <label className="brewpref__label">Drip</label>
        //         </div>
        //         <div className="brewpref__option-container">
        //             <input type="checkbox" onChange = {handleChange('brewpref')} defaultValue={values.brewpref} checked = {this.props.isChecked} value="French Press"/>
        //             <label className="brewpref__label">French Press</label>
        //         </div>
        //         <div className="brewpref__option-container">
        //             <input type="checkbox" onChange = {handleChange('brewpref')}defaultValue={values.brewpref} checked = {this.props.isChecked} value="Coffee maker"/>
        //             <label className="brewpref__label">Coffee Maker</label>
        //         </div>
        //         <div className="brewpref__option-container">
        //             <input type="checkbox" onChange = {handleChange('brewpref')} defaultValue={values.brewpref} checked = {this.props.isChecked} value="AeroPress"/>
        //             <label className="brewpref__label">AeroPress</label>
        //         </div>
        //     </form>
        //     <div className="brewpref__btn-container">
        //         <button className="brewpref__btn" onClick={this.continue}>Next →</button>
        //     </div>
        // </div>

        )
    }
}
