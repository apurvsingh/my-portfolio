import React, { Component } from 'react';
import profilePicture from '../mediaSources/profile-picture.jpg'
export class Avatar extends Component{
    render(){
        return(
          <div className = "avatarPicture">
            <img src = { profilePicture } alt = "Profile Picture"></img>
          </div>
        );
    }
}