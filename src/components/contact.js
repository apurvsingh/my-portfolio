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
              <div className = "contactForm">
                <form>
                  <h2>Send Message</h2>
                  <div className = "inputBox bottom-margin-mini">
                    <input type = "text" name = "" required></input>
                    <span>Full Name</span>
                  </div>
                  <div className = "inputBox bottom-margin-mini">
                    <input type = "text" name = "" required></input>
                    <span>Email</span>
                  </div>
                  <div className = "inputBox bottom-margin-mini">
                    <textarea name = "" required></textarea>
                    <span>Message</span>
                  </div>
                  <div className = "inputBox bottom-margin-mini">
                    <input type = "submit" value = "Send"></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}