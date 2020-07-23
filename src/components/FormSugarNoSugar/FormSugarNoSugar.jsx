import React, { Component } from 'react'
import './FormSugarNoSugar.scss';

export default class FormSugarNoSugar extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const {values, handleChange, toggleChange, sugarnosugar, step} = this.props;

        return (
            <div className="sugarnosugar">
                <span>{step} of 5</span>
                <p className="sugarnosugar__question">How do you take your coffee? </p>
                <span className="sugarnosugar__select-condition">selection one:</span>
                <form action="" className="sugarnosugar__form">
                    <div className="sugarnosugar__option-container">
                        <input type="checkbox" onChange = {handleChange('sugarnosugar')}
                        defaultValue={values.sugarnosugar} checked = {this.props.isChecked} value="Black"/>
                        <label className="sugarnosugar__label">Black</label>
                    </div>
                    <div className="sugarnosugar__option-container">
                        <input type="checkbox" onChange = {handleChange('sugarnosugar')}
                        defaultValue={values.sugarnosugar} checked = {this.props.isChecked} value="Cream"/>
                        <label className="sugarnosugar__label">Cream</label>
                    </div>
                    <div className="sugarnosugar__option-container">
                        <input type="checkbox" onChange = {handleChange('sugarnosugar')}
                        defaultValue={values.sugarnosugar} checked = {this.props.isChecked} value="Sugar"/>
                        <label className="sugarnosugar__label">Sugar</label>
                    </div>
                    <div className="sugarnosugar__option-container">
                        <input type="checkbox" onChange = {handleChange('sugarnosugar')}
                        defaultValue={values.sugarnosugar} checked = {this.props.isChecked} value="Decaf"/>
                        <label className="sugarnosugar__label">Decaf</label>
                    </div>
                </form>
                <div className="sugarnosugar__btn-container">
                    <button className="sugarnosugar__btn" onClick={this.back}>← Back</button>
                    <button className="sugarnosugar__btn" onClick={this.continue}>Next →</button>
                </div>

            </div>
        )
    }
}
