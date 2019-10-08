import "./Style.css";

import React, { Component } from "react";

export default class Register extends Component {


  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
    
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      
    });
    
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`${this.state.firstName} ${this.state.lastName} ${this.state.email} ${this.state.password} ${this.state.rePassword}`);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: ""
    });
    
    
    
    
  };

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Placeholder"
                id="first_name"
                type="text"
                className="validate"
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="Email" type="Email" className="validate" />
              <label htmlFor="Email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Re-Enter Password</label>
            </div>
          </div>
          
        </form>
        <form  action="filled-in">
            <h5>Are you a Teacher?</h5>
          <p>
              
            <label>
              <input id="checkbox" type="checkbox" className="filled-in"  />
              <span></span>
            </label>
            
          </p>
        </form>
        <button className="btn waves-effect waves-light" type="submit" onClick={function() {alert('Was clicked')}}
            >Submit</button>
      </div>
      
    );
  }
}
