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
            value: "",
        },
        // coffeecolor: "",
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

    // test handleChange for Select

    // _handleChange = ({ target: { name, value } }) => {
    //     this.setState({ [name]: value });
    //   };
    
  
    render() {
        const {step}= this.state;
        // const question2value = this.state.question2.value;
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
                    // <FormUserDetails
                    // nextStep = {this.nextStep}
                    // handleChange = {this.handleChange}
                    // toggleChange = {this.toggleChange}
                    // question2value = {question2value}
                    // values={values} 
                    // // handleChange2={this._handleChange}
                    // checked = {this.state.isChecked}
                    // />
                    <FormBrewPref 
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
                    // <FormPersonalDetails
                    // nextStep = {this.nextStep}
                    // prevStep = {this.prevStep}
                    // handleChange = {this.handleChange}
                    // values={values} 
                    // />
                    <FormCoffeeColor 
                    coffeecolor ={coffeecolor}
                    // coffeecolor = {this.coffeecolor}
                    values={values} 
                    handleChange = {this.handleChange}
                    toggleChange = {this.toggleChange}
                    checked = {this.state.isChecked}
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    />
                )
            case 4:
                return (
                    // <FormPersonalDetails
                    // nextStep = {this.nextStep}
                    // prevStep = {this.prevStep}
                    // handleChange = {this.handleChange}
                    // values={values} 
                    // />
                    <FormFlavourPref
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
                return(
                    <Confirm 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    brewpref = {this.state.brewpref}
                    sugarnosugar = {this.state.sugarnosugar}
                    coffeecolor = {this.state.coffeecolor}
                    flavourpref = {this.state.flavourpref}
                    flavourspice = {this.state.flavourspice}
                    values={values}
                    />
                )
            case 7:
                return (
                    <Recommendation/>
                )        
        }
        return (
            <div>
                Hi
            </div>
        )
    }
}

export default UserForm
