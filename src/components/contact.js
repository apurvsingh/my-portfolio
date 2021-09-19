import React, { Component } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import { CopyToClipboard } from './copyToClipboard';

export class Contact extends Component {
  constructor(){
    super();
    this.myRef = React.createRef();
  }

  render(){
    return(
      <div id = "contact" className = "contact-section">
        <div className = "">
          <h1 className = "section-title">My Contact</h1>
          <div className = "border"></div>

          <div className = "contact-container">
            <div className = "contactInfo">
              <div className = "box">
                <div className = "icon">
                  <FaMapMarkerAlt/>
                </div>
                <div className = "text">
                  <h3>Address</h3>
                  <p>University Of Maryland, College Park</p>
                </div>
              </div>
              <div className = "box">
                <div className = "icon">
                  <FaMobileAlt/>
                </div>
                <div className = "text">
                  <h3>Phone Number</h3>
                  <p>2407269923</p>
                </div>
              </div>
              <div className = "box">
                <div className = "icon">
                  <FaEnvelope/>
                </div>
                <div className = "text">
                  <h3>e-mail</h3>
                  <p ref = { this.myRef } id = "copy">apurvsingh95@gmail.com</p>
                  <CopyToClipboard elementToCopy = { this.myRef }/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

