import React from 'react';
import { Avatar } from './avatar';
import { NavbarComponent } from './navbar';
import { ParticleBackground } from './particle-background';
import { Socials } from './socials';
import {withRouter} from 'react-router-dom';
import { MyButton } from './button';

export class LandingPage extends React.Component {
    render() {
      return (
        <div className = "globalBackground">
          <ParticleBackground/>
          <NavbarComponent backgroundColor = { 'transparent' }/>
          <div className = "landingPageContainer">
            <Avatar/>
          
            <div id = "landingPageText" className = "landingPageHeader">
              <h3>I&#39;m Apurv</h3>
              <span id = "animatedWhoAmI"></span>
            </div>

            <div onClick = { () => this.nextPath('/home') }>
              <MyButton caption = { 'Find out more' } fontSize = { '1em' } id = { 'landingPageButton' } />
            </div>
            
            <Socials/>
          </div>
        </div>
      );
    }

    nextPath(path) {
      // eslint-disable-next-line react/prop-types
      this.props.history.push(path);
    }
  }
  
  export default withRouter(LandingPage);