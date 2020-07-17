import React, { Component } from 'react'

export default class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const {values, handleChange, toggleChange, handleChange2, question2value} = this.props;

        return (
            <div>
                <form action="">
                    <label htmlFor="">First Name</label>
                    <input type="text"
                    onChange={handleChange('firstName')} defaultValue={values.firstName}/>
                    <br/>
                    <label htmlFor="">Last Name</label>
                    <input type="text" onChange={handleChange('lastName')} defaultValue={values.lastName}/>
                    <br/>
                    <label htmlFor="">Email</label>
                    <input type="text" onChange={handleChange('email')} defaultValue={values.email}/>
                    <br/>
                    <button onClick={this.continue}>Next</button>
                </form>


            {/* test select */}
         
            <form action="">
                <input type="checkbox" onChange = {handleChange('value')}
              defaultValue={values.value} checked = {this.props.isChecked} value="a"/>
                <input type="checkbox" onChange = {handleChange('value')}
              defaultValue={values.value} checked = {this.props.isChecked} click={toggleChange}  value="b"/>
              <input type="checkbox" onChange = {handleChange('value')}
              defaultValue={values.value} checked = {this.props.isChecked} click={toggleChange}  value="c"/>
              <input type="checkbox" onChange = {handleChange('question2value')}
              defaultValue={values.question2value} checked = {this.props.isChecked} click={toggleChange}  value="d"/>
            </form>

            </div>
        )
    }
}


{/* <select
onChange = {handleChange('value')}
defaultValue={values.value}
className="ant-input selectBox"
style={{ width: 200 }}
placeholder="Select a person"
defaultValue={this.value}
  ref={ref => {
    this._select = ref;
        }}
>
<option value="a">A</option>
<option value="b">B</option>
...
</select> */}