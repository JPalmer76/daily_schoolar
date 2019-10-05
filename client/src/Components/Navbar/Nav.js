import React, { Component } from 'react';
import "./Style.css"

export default class Nav extends Component {
  render() {
    return (
        <nav>
    <div class="nav-wrapper">
      <a href="#" id="navfont1" class="brand-logo">Daily Schoolar</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a class="navfont" href="sass.html">Sass</a></li>
        <li><a class="navfont" href="badges.html">Components</a></li>
        <li><a class="navfont" href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
      
    )
  }
}
