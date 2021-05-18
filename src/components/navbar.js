import React, { Component } from 'react';
import { Link } from 'react-scroll'
import PropTypes from 'prop-types';

export class NavbarComponent extends Component{
    render(){
        return(
          <nav style = { { backgroundColor: this.props.backgroundColor } }>
            <input id = "nav-toggle" type = "checkbox"></input>
            <div className = "logo">
              <Link to = "about" smooth = { true } duration = { 750 } >Apurv</Link>
            </div>
            <ul className = "links">
              <li>
                <Link to = "about" smooth = { true } duration = { 750 } >About</Link>
              </li>
              <li>
                <Link to = "services" smooth = { true } duration = { 750 } >Services</Link>
              </li>
              <li>
                <Link to = "mySkills" smooth = { true } duration = { 750 } >My Skills</Link>
              </li>
              <li>
                <Link to = "experience" smooth = { true } duration = { 750 }>Experience</Link>
              </li>
              <li>
                <Link to = "testimonial" smooth = { true } duration = { 750 }>Testimonial</Link>
              </li>
              <li>
                <Link to = "contact" smooth = { true } duration = { 750 } >Contact</Link>
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
}

NavbarComponent.defaultProps = {
  backgroundColor: '#02475e'
};

NavbarComponent.propTypes = {
  backgroundColor: PropTypes.string,
};