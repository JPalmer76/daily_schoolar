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
    })
    
    
    
    
  };
  render() {
    return (
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input
                placeholder="First Name"
                id="first_name"
                value={this.firstName}
                name="firstName"
                onChange={this.handleInputChange}
                type="text"
                class="validate"
              />
              <label htmlfor="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input placeholder="Last Name" value={this.lastName} name="lastName" onChange={this.handleInputChange} id="last_name" type="text" class="validate" />
              <label htmlfor="last_name">Last Name</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input placeholder="Enter your email" value={this.email} name="email" onChange={this.handleInputChange} id="Email" type="Email" class="validate" />
              <label for="Email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input  type="password" name="password" onChange={this.handleInputChange} value={this.password} class="validate" />
              <label htmlfor="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input name="rePassword" value={this.rePassword} onChange={this.handleInputChange} id="re-password" type="password" class="validate" />
              <label htmlfor="password">Re-Enter Password</label>
            </div>
          </div>
          
        </form>
        <form  action="filled-in">
          <p>
              
            <h5>Are you a Teacher?</h5>
            <label>
              <input id="checkbox" type="checkbox" class="filled-in" checked="checked" />
              <span></span>
            </label>
            
          </p>
        </form>
        <button className="btn waves-effect waves-light" type="submit" onClick={this.handleFormSubmit}
            >Submit</button>
      </div>
      
    );
  }
}
