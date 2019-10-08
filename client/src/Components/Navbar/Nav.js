import React, { Component } from 'react';
import "./Style.css"

export default class Nav extends Component {
  render() {
    return (
      <nav class="white z-depth-0">
        <div class="container">
          <div class="nav-wrapper">
            {/* <a class="brand-logo black-text"><img src="/assets/images/logo.png"></a> */}
            {/* <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons black-text">menu</i></a> */}
            <ul class="right hide-on-med-and-down">
              <li class="active"><a class="black-text" routerLink="/login">Home</a></li>
              <li><a class="black-text" routerLink="/Admin">Something</a></li>
              <li><a class="black-text" routerLink="/Student">Something Else</a></li>
            </ul>
          </div>
        </div>
        {/* <ul class="side-nav" id="mobile-demo">
          <li><a class="black-text" routerLink="/home">Home</a></li>
          <li><a class="black-text" routerLink="/services">Something</a></li>
          <li><a class="black-text" routerLink="/contacts">Something Else</a></li>
        </ul> */}

        <script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
          crossorigin="anonymous"></script>

        <script type="text/javascript">
          {/* $(document).ready(function(){
            $('ul.right li').on('click', function () {
              var clicked = $(this);
              $('ul.right li').each(function () {
                if ($(this).hasClass('active')) {
                  $(this).removeClass('active');
                }
              });
              $(this).addClass('active');
            })
          }); */}
        </script>
      </nav>
    )
  }
}



