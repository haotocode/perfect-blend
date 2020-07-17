import React, { Component } from 'react'

export default class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const {values, handleChange, toggleChange} = this.props;
        return (
            <div>
                <form action="">
                    <label htmlFor="">Occupation</label>
                    <input type="text" onChange={handleChange('occupation')} defaultValue={values.occupation}/>
                    <br/>
                    <label htmlFor="">City</label>
                    <input type="text" onChange={handleChange('city')} defaultValue={values.city}/>
                    <br/>
                    <label htmlFor="">bio</label>
                    <input type="text" onChange={handleChange('bio')} defaultValue={values.bio}/>
                    <br/>
                    <input type="checkbox" onChange = {handleChange('value')}
              defaultValue={values.value} checked = {this.props.isChecked} click={toggleChange}  value="d"/>

                    <button onClick={this.continue}>Next</button>
                    <button onClick={this.back}>Back</button>
                </form>
            </div>
        )
    }
}
