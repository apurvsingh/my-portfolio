import React, { Component } from 'react';
import profilePicture from '../mediaSources/profile-picture.jpg'
export class Avatar extends Component{
    render(){
        return(
          <div className = "proflie-card">
            <div className = "card-header">
              <div className = "pic">
                <img src = { profilePicture } alt = "Profile Picture"></img>
              </div>
            </div>
          </div>
        );
    }
}