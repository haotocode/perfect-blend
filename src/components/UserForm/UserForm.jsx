import React, { Component } from 'react';
import FormBrewPref from '../FormBrewPref/FormBrewPref';
import FormSugarNoSugar from '../FormSugarNoSugar/FormSugarNoSugar';
import FormCoffeeColor from '../FormCoffeeColor/FormCoffeeColor';
import FormFlavourPref from '../FormFlavourPref/FormFlavourPref';
import FormFlavourSpices from '../FormFlavourSpices/FormFlavourSpices';
import Confirm from '../Confirm/Confirm';
import Recommendation from '../Recommendation/Recommendation';
import './UserForm.scss';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
        isChecked: false,
        value: "",
        brewpref: {
            value: "",
        },
        sugarnosugar: {
            value: "",
        },
        coffeecolor: {
            value: "hi",
        },
        flavourpref: {
            value: "",
        },
        flavourspice: {
            value: "",
        },
        question2: "",
        question2:{
            value: ""
        }
    }

    // Proceed to next step
    nextStep = ()=> {
        const {step} = this.state;
        this.setState({step: step + 1})
    }

    // go back to previous step

    prevStep = ()=> {
        const {step} = this.state;
        this.setState({step: step - 1})
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    // toggle change
    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        })
    }
  
    render() {
        const {step}= this.state;
        const brewpref = this.state.brewpref.value;
        const sugarnosugar = this.state.sugarnosugar.value;
        const coffeecolor = this.state.coffeecolor.value;
        const flavourpref = this.state.flavourpref.value;
        const flavourspice = this.state.flavourspice.value;
        const {firstName, lastName, email, occupation, city, bio, value} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio, value}

        switch(step){
            case 1:
                return(
                    <FormBrewPref
                    step={step}
                    brewpref = {brewpref}
                    values={values} 
                    handleChange = {this.handleChange}
                    toggleChange = {this.toggleChange}
                    checked = {this.state.isChecked}
                    nextStep = {this.nextStep}
                    />
                )
            case 2:
                return (
                    <FormSugarNoSugar
                    step={step}
                    sugarnosugar ={sugarnosugar}
                    values={values} 
                    handleChange = {this.handleChange}
                    toggleChange = {this.toggleChange}
                    checked = {this.state.isChecked}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    />
                )
            case 3:
                return (
                    <FormCoffeeColor
                    step={step} 
                    coffeecolor ={coffeecolor}
                    values={values} 
                    coffeecolor = {this.state.coffeecolor}
                    handleChange = {this.handleChange}
                    toggleChange = {this.toggleChange}
                    checked = {this.state.isChecked}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    />
                )
            case 4:
                return (
                    <FormFlavourPref
                    step={step}
                    flavourpref={flavourpref}
                    values={values} 
                    handleChange = {this.handleChange}
                    toggleChange = {this.toggleChange}
                    checked = {this.state.isChecked}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    />
                )
            case 5:
                return (
                    <FormFlavourSpices
                    step={step}
                    flavourspice={flavourspice}
                    values={values} 
                    handleChange = {this.handleChange}
                    toggleChange = {this.toggleChange}
                    checked = {this.state.isChecked}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    />
                )
            case 6:
                return (
                    <Recommendation/>
                )        
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
