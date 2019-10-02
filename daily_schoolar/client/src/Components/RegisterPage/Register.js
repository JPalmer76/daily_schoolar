import "./Style.css";

import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input
                placeholder="Placeholder"
                id="first_name"
                type="text"
                class="validate"
              />
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input id="Email" type="Email" class="validate" />
              <label for="Email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" class="validate" />
              <label for="password">Re-Enter Password</label>
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
        <button className="btn waves-effect waves-light" type="submit" onClick={function() {alert('Was clicked')}}
            >Submit</button>
      </div>
      
    );
  }
}
