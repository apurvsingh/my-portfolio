import React, { Component } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';

export class Contact extends Component {
  render(){

    return(
      <div id = "contact"  className = "offwhiteSection">
        <div className = "contact-section">
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
                    <p>Coming soon...</p>
                  </div>
                </div>
                <div className = "box">
                  <div className = "icon">
                    <FaEnvelope/>
                  </div>
                  <div className = "text">
                    <h3>e-mail</h3>
                    <p>apurvsingh95@outlook.com</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}