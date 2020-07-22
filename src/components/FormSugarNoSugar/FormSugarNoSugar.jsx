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
        const {values, handleChange, toggleChange, sugarnosugar} = this.props;

        return (
            <div className="sugarnosugar">
                <p className="brewpref__question">How do you take your coffee? </p>
                <span>selection one:</span>
                <form action="">
                    <label>Black</label>
                    <input type="checkbox" onChange = {handleChange('sugarnosugar')}
                    defaultValue={values.sugarnosugar} checked = {this.props.isChecked} value="Black"/>
                    <label>Cream</label>
                    <input type="checkbox" onChange = {handleChange('sugarnosugar')}
                    defaultValue={values.sugarnosugar} checked = {this.props.isChecked} value="Cream"/>
                    <label>Sugar</label>
                    <input type="checkbox" onChange = {handleChange('sugarnosugar')}
                    defaultValue={values.sugarnosugar} checked = {this.props.isChecked} value="Sugar"/>
                    <label>Decaf</label>
                    <input type="checkbox" onChange = {handleChange('sugarnosugar')}
                    defaultValue={values.sugarnosugar} checked = {this.props.isChecked} value="Decaf"/>
                </form>
                <button onClick={this.continue}>Next</button>
                <button onClick={this.back}>Back</button>

            </div>
        )
    }
}
