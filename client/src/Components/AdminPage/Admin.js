import React, { Component } from 'react';
import "./Style.css";

export default class Admin extends Component {
  render() {
    return (
      <wrapper>
      <div class="row">
    <div class="col s12 ">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Assign tasks</span>
          <p>Use the form below to assign tasks to your kiddos!</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col s5 ">
  <label>Student Select</label>
  <select class="browser-default">
    <option value="" disabled selected>Choose your Student</option>
    <option value="1">Jayden</option>
    <option value="2">Bejamin</option>
    <option value="3">Elliott</option>
  </select>
  </div>
  <div class="col s1 "></div>
  <div class="col s5 ">
  <label>Topic Select</label>
  <select class="browser-default">
    <option value="" disabled selected>Choose your Topic</option>
    <option value="1">Academics</option>
    <option value="2">Chores</option>
    <option value="3">Physical Activities</option>
  </select>
  </div>
  </div>
  <div class="row">
    <div class="col s5 ">
  <label>Browser Select</label>
  <select class="browser-default">
    <option value="" disabled selected>Choose your option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  </div>
  </div>
  <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s3">
            <input id="input_text" type="text" data-length="10" />
            <label id="input_text" for="input_text">Input text</label>
          
        </div>
        <div class="row">
          <div class="input-field col s8">
            <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
            <label id="textarea2" for="textarea2">Textarea</label>
          </div>
        </div>
        </div>
      </form>
    </div>
    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    
  </button>
  

  </wrapper>
  
    )
  }
}
