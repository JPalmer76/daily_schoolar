import React, { Component } from 'react';
import "./Style.css";
import axios from "axios";
// const router = require("express").Router();
// const teacherRoutes = require("./teachers");
// router.use("/teachers", teacherRoutes);



export default class Admin extends Component {

    state = {
    topic: "",
    message: "",
    teachers: [],
    students: []

  }

  componentDidMount() {
    console.log("Hello");
    axios.get("/api/teachers/")
    // fetch("/api/teachers", {method:"GET"})
    .then((response) => {
      console.log(response);
      let teachersFromApi = response.data.map(teacher => { return {value: teacher, display: teacher} })
      this.setState({ teachers: teachersFromApi})
      // return response.json();
    }).catch(error => {
      console.log(error);
    });

   
  }
   componentDidMount () {
    console.log("Hello");
    axios.get("/api/students/")
    // fetch("/api/teachers", {method:"GET"})
    .then((response) => {
      console.log(response);
      let studentsFromApi = response.data.map(student => { return {value: student, display: student} })
      this.setState({ students: studentsFromApi})
      // return response.json();
    }).catch(error => {
      console.log(error);
    });
   }

  handleInputChange = event => {
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
  topic: document.getElementById("input_text").value,
  message: document.getElementById("textarea").value
  
});

var config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

axios.post("/api/tasks",
{topic: this.state.topic, message: this.state.message}, config)
.then(res =>{
  console.log(res)
}).catch(err =>{
  console.log(err)
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
  <label>Techer Select</label>
  <select name="teacher" value={this.state.selectValue}  onChange={this.handleChange}  class="browser-default">
    <option value="" disabled selected>Choose your Teacher</option>
    {/* <option value="1">Jayden</option>
    <option value="2">Bejamin</option>
    <option value="3">Elliott</option> */}
    {this.state.teachers.map((teacher, index )=> {
      return <option value = {index} >{teacher.display.tfirstName} {teacher.display.tlastName}</option>
    })}
  </select>
  </div>


  {/* assigning  to student */}
  <div class="col s1 "></div>
  <div class="col s5 ">
  <label>Student Select</label>
  <select name="student" value={this.state.selectValue}  onChange={this.handleChange}  class="browser-default">
    <option value="" disabled selected>Choose your Student</option>
    {/* <option value="1"></option>
    <option value="2"></option>
    <option value="3"></option> */}
    {this.state.students.map((student, index )=> {
      return <option value = {index} >{student.display.firstName} {student.display.lastName}</option>
    })}

  </select>
  </div>
  </div>
  
  
  <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s3">

            <input name="topic" value={this.topic} onChange={this.grabTopic} id="input_text" type="text" data-length="50" />

            <label id="input_text" htmlfor="input_text">Subject</label>
          
        </div>
        <div class="row">
          <div class="input-field col s8">

            <textarea name="message" value={this.message} onChange={this.grabTopic} id="textarea" class="materialize-textarea" data-length="255" />

            <label id="textarea" htmlfor="textarea">Task(s)</label>
          </div>
        </div>
        </div>
      </form>
    </div>
    <button  className="btn waves-effect waves-light" type="submit" onClick={this.handleFormSubmit}>Submit
    
  </button>
  

  </wrapper>
  
    );
  }
}
