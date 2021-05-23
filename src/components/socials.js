import React, { Component } from 'react';
import { FaCheck, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export class Socials extends Component{
  constructor(){
    super();
        this.state={
        visible : false
    }
  }
  render(){
      return(
        <div className = "socials top-margin-mini">
          <a href = "https://github.com/apurvsingh" target = "blank">
            <FaGithub/>
          </a>
          <a href = "https://www.linkedin.com/in/apurv-singh-6b6600112/" target = "blank">
            <FaLinkedin/>
          </a>
          <a href = "https://www.hackerrank.com/apurvsingh95" target = "blank">
            <FaHackerrank/>
          </a>
          <a
            href = "#"
            target = "blank"
            onClick = { e => {
                  this.handleClick(e)
            } }
            title = "Click to copy e-mail ID"
          >
            <FaEnvelope/>
          </a>
          {this.state.visible &&
            <span className = "copied-notification"> 
              <span> 
                <FaCheck/>
              </span>
              <span>Copied</span>
            </span>
          }
        </div>
      );
    }

    handleClick(e){
      e.preventDefault();
      this.setState({visible:true},()=>{
          window.setTimeout(()=>{
            this.setState({visible:false})
          },2000)
        });
      navigator.clipboard.writeText('apurvsingh95@outlook.com')
  }
}
