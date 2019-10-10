import React, { Component } from 'react';
import "./Style.css";
// import axios from "axios";

export default class Admin extends Component {

    state = {
    topic: "",
    message: ""

  }

  grabTopic = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();

    //  alert(`${this.state.topic} ${this.state.message}`);

// axios.post("/api/tasks")

    this.setState({
      topic: "",
      message: "",
      student: ""
    });
  };


  // grabbing value for the student to assign task to
  // handleChange: (e) =>({
  //   this.setState({selectValue:e.target.value});

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

  {/* assigning the student */}
  <div class="row">
    <div class="col s5 ">
  <label>Student Select</label>
  <select name="student" value={this.state.selectValue}  onChange={this.handleChange}  class="browser-default">
    <option value="" disabled selected>Choose your Student</option>
    <option value="1">Jayden</option>
    <option value="2">Bejamin</option>
    <option value="3">Elliott</option>
  </select>
  </div>

  {/* assigning  to student */}
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
      <form class="col s12">
        <div class="row">
          <div class="input-field col s3">

            <input name="topic" value={this.topic} onChange={this.grabTopic} id="input_text" type="text" data-length="50" />

            <label id="input_text" for="input_text">Subject</label>
          
        </div>
        <div class="row">
          <div class="input-field col s8">

            <textarea name="message" value={this.message} onChange={this.grabTopic} id="textarea2" class="materialize-textarea" data-length="255"></textarea>

            <label id="textarea2" for="textarea2">Task(s)</label>
          </div>
        </div>
        </div>
      </form>
    </div>
    <button onClick={this.handleFormSubmit} class="btn waves-effect waves-light" type="submit" name="action">Submit
    
  </button>
  

  </wrapper>
  
    )
  }
}
