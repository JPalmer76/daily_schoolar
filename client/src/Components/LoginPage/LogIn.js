import React, { Component } from 'react';
import "./Style.css";


export default class Admin extends Component {


  render() {
    return (
      <container>
        
       <form className="col s6">
       <h3 id="adminTitle">Parent/Teacher Login</h3>
      <div class="row">
      <div class="col s3"/>
        <div class="input-field col s6">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      
      <div class="row">
      <div class="col s3"/>
        <div class="input-field col s6">
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <button class="button" class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
  
  <form className="col s6">
  <h3 id="adminTitle">Student Login</h3>
  <div class="row">
  <div class="col s3"/>
    <div class="input-field col s6">
      <input id="email" type="email" class="validate"/>
      <label for="email">Email</label>
    </div>
  </div>
  <div class="row">
  <div class="col s3"/>
    <div class="input-field col s6">
      <input id="password" type="password" class="validate"/>
      <label for="password">Password</label>
    </div>
  </div>
  <button class="button" class="btn waves-effect" type="submit" name="action">submit</button>
</form>
</form>
</container>
        
      
    )
  }
}
