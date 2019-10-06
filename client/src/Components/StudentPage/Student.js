import "./Style.css";

import React, { Component } from 'react'

export default class Student extends Component {
  render() {
    return (
      <wrapper>
        <div id="cardbg">
        <div class="row">
          <div class="col s12 ">
            <div class="card blue-grey darken-0">
              <div  class="card-content black-text">
                <span class="card-title">What I did today....</span>
                <p>
                  Enter the things you did today in the spaces below.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 class="topic">Academics</h5>
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
            <li>Empty the dishwasher and reload with dirty dishes.</li>
            <li>Wipe kitchen table and counters.</li>
            <li>Make you bed and picked up your room.</li>
            <li>Straighten the family room and vacuum.</li>
          </ul>
        </div>
        <div>
          <h5 class="topic">Physical Activity</h5>
        </div>
        <div className="displayBox">
          <ul class="list">
            <li>walk Oreo.</li>
            <li>Play with Oreo outside.</li>
            <li>15 minutes of yoga or strength training.</li>
            <li></li>
          </ul>
        </div>
        </div>
      </wrapper>
    )
  }
}
