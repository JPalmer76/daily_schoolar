import "./Style.css";

import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <wrapper>
          <div class="row">
    <div class="col s12 ">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div>
          <div>
              <h5  class="topic">Academics</h5>
              </div>
          <div className="displayBox">
              <ul class="list">
                  <li>Reading Monday 9/30: Read Moby Dick for 30 minutes, or 3 chapters. Write a summary of what you read.</li>
                  <li>Math Monday 9/30: Complete Chapter 2, and upolad picture of completed work.</li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
          <div>
              <h5 class="topic">Chores</h5>
              </div>
          <div className="displayBox">
          <ul class="list">
                  <li>Reading Monday 9/30: Read Moby Dick for 30 minutes, or 3 chapters. Write a summary of what you read.</li>
                  <li>Math Monday 9/30: Complete Chapter 2, and upolad picture of completed work.</li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
          <div>
              <h5 class="topic">Physical Activity</h5>
              </div>
          <div className="displayBox">
          <ul class="list">
                  <li>Reading Monday 9/30: Read Moby Dick for 30 minutes, or 3 chapters. Write a summary of what you read.</li>
                  <li>Math Monday 9/30: Complete Chapter 2, and upolad picture of completed work.</li>
                  <li></li>
                  <li></li>
              </ul>
          </div>
          
      </wrapper>
    )
  }
}
