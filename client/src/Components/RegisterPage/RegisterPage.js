import React, { Component } from "react";
import "./Style.css";
import API from "../../utils/API";
import axios from "axios"


export default class Register extends Component {


  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    tfirstName: "",
    tlastName: "",
    temail: "",
    tpassword: ""
    
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`${this.state.firstName} ${this.state.lastName} ${this.state.email} ${this.state.password} ${this.state.rePassword}`);
    this.setState({
      firstName: document.getElementById("first_name").value,
      lastName: document.getElementById("last_name").value,
      email: document.getElementById("Email").value,
      password: document.getElementById("password").value,
      rePassword: document.getElementById("re_password").value
    });
    
    var config = {
      headers: {'Access-Control-Allow-Origin': '*'}
  };

    axios.post("/api/students",
    {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, password: this.state.password}, config)
    .then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    });
    
    
  };

  thandleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`${this.state.firstName} ${this.state.lastName} ${this.state.email} ${this.state.password} ${this.state.rePassword}`);
    this.setState({
      tfirstName: document.getElementById("tfirst_name").value,
      tlastName: document.getElementById("tlast_name").value,
      temail: document.getElementById("tEmail").value,
      tpassword: document.getElementById("tpassword").value,
      trePassword: document.getElementById("tre_password").value
    });
    
    var config = {
      headers: {'Access-Control-Allow-Origin': '*'}
  };

    axios.post("/api/teachers",
    {tfirstName: this.state.tfirstName, tlastName: this.state.tlastName, temail: this.state.temail, tpassword: this.state.tpassword}, config)
    .then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    });
    
    
  };

 
render() {
  
    return (
      <wrapper>
      <div className="row">
        <h5>Student Registration</h5>
        <br />
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
              <input id="re_password" type="password" className="validate" />
              <label htmlFor="password">Re-Enter Password</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" onClick={this.handleFormSubmit}>
          Submit/Student<i class="material-icons right">send</i></button>
          
        </form>
        
        
      </div>

      <strong><hr /></strong>
      <br />

     
      <div className="row">
        <h5>Teacher Registration</h5>
       
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="Placeholder"
                id="tfirst_name"
                type="text"
                className="validate"
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="tlast_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="tEmail" type="Email" className="validate" />
              <label htmlFor="Email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="tpassword" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="tre_password" type="password" className="validate" />
              <label htmlFor="password">Re-Enter Password</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" onClick={this.thandleFormSubmit}>
          Submit/Teacher<i class="material-icons right">send</i></button>
          
        </form>
        </div>
        </wrapper>
        
        
     
      
    );
  }
}


