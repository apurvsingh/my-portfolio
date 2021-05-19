import React from 'react';
import profilePicture from '../mediaSources/profile-picture.jpg'
import { MyButton } from './button';
// @ts-ignore
import pdf from '../mediaSources/cv.pdf'

export class About extends React.Component {
    render(){
        return(
          <>
            <div id = "about" className = "offwhiteSection ">
              <div className = "container">
                <div className = "content-section">
                  <div className = "title">
                    <h1>Data Analyst</h1>
                  </div>
                  <div className = "content">
                    <h3>
                      Hi, I am Apurv.
                      I am a business graduate from University of Maryland, CP.
                      I expertise in Python, MySql, R and AWS.
                    </h3>
                    <p>
                      I am a former web developer with 4 years of experience 
                      and have extensively worked with C#, ASP .net core, Angular, React, LitElements, NodeJS, Git
                    </p>
                  </div>
                  <div className = "top-margin-mini">
                    <MyButton caption = { 'View CV' } fontSize = { '0.8em' } id = { 'downloadCv' } link = { pdf }/>
                  </div>
                </div>
                <div className = "image-section">
                  <img src = { profilePicture } alt = "Profile Picture"></img>
                </div>
              </div>
              <div className = "bottom-margin-mini"></div>

            </div>
          </>
        );
    }

    componentDidMount(){
      const downloadButton = document.querySelector('#downloadCv');
      downloadButton.setAttribute("target", "_blank");
    }
}