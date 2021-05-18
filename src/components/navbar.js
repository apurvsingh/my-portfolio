import React, { Component } from 'react';
export class NavbarComponent extends Component{
    render(){
        return(
          <nav>
            <input id = "nav-toggle" type = "checkbox"></input>
            <div className = "logo">
              <strong>Apurv</strong>
            </div>
            <ul className = "links">
              <li>
                <a href = "#about">About</a>
              </li>
              <li>
                <a href = "#services">Services</a>
              </li>
              <li>
                <a href = "#mySkills">My Skills</a>
              </li>
              <li>
                <a href = "#experience">Experience</a>
              </li>
              <li>
                <a href = "#testimonial">Testimonial</a>
              </li>
              <li>
                <a href = "#contact">Contact</a>
              </li>
            </ul>
            <label htmlFor = "nav-toggle" className = "icon-burger">
              <div className = "line"></div>
              <div className = "line"></div>
              <div className = "line"></div>
            </label>
          </nav>
        );
    }

    componentDidMount(){
      // console.log(document.querySelector('#nav'))
    }
}