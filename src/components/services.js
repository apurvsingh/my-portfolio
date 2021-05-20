import React from 'react';

import {
  FaReact,
  FaPython,
  FaDatabase,
  FaJsSquare,
  FaGitAlt,
  FaRProject,
  FaServer,
  FaBusinessTime
}

from "react-icons/fa";

import {
  IndividualService
}

from './individual-service';


export class ServicesAndSkills extends React.Component {
  render() {
    return(
      <div id = "services"className = "services-section"> 
        <h1 className = "section-title">My Services &amp; Skills</h1> 
        <div className = "border"></div> 
        <div className = "component-container"> 
          <div className = "service-box"> 
            <IndividualService
                title = "Data Analyst"
                description = "Help you make sense of your data and make informed decisions"
                icon = {
                  <FaBusinessTime/>
                      }
            />
          </div> 
          <div className = "top-padding-mini" ></div>
          <div className = "service-box"> 
            <IndividualService
                title = "Web Development"
                description = "Build modern, responsive and appealing websites that catering to all your commercial requirements"
                icon = {
                  <FaReact/>
                      }
            />
          </div> 
            
          <div className = "service-box"> 
            <IndividualService
                title = "Python"
                description = "Numpy, pandas for data analysis"
                icon = {
                  <FaPython/>
                      }
            />
          </div> 
            
          <div className = "service-box"> 
            <IndividualService
                title = "R"
                description = "R, Tableu for Data Analysis and visualization"
                icon = {
                  <FaRProject/>
                      }
            />
              
          </div> 
            
          <div className = "service-box"> 
            <IndividualService
                title = "Database"
                description = "MySql"
                icon = {
                  <FaDatabase/>
                      }
            />
          </div> 
            
          <div className = "service-box"> 
            <IndividualService
                title = "Javascript"
                description = "Node JS, Angular, React, LitElements, npm, ParticleJS, JQuery, Jasmine, HTML5, CSS"
                icon = {
                  <FaJsSquare/>
                      }
            />
          </div> 
            
          <div className = "service-box"> 
            <IndividualService
                title = "C#, ASP.net Core"
                description = ""
                icon = {
                  <FaServer/>
                      }
            />
          </div> 
            
          <div className = "service-box"> 
            <IndividualService
                title = "Git"
                description = ""
                icon = {
                  <FaGitAlt/>
                }
            />
          </div>

        </div>
      </div>
);
  }
}
