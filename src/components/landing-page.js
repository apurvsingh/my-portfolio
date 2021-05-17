import React from 'react';
import { Avatar } from './avatar';
import { Navbar } from './navbar';
import { ParticleBackground } from './particle-background';
import { Socials } from './socials';

export class LandingPage extends React.Component {
    render() {
      return (
      <div>
        {/* <ParticleBackground/>
        <div className="landingPageContainer">
          <Avatar/>
          
          <div id="landingPageText" className="landingPageHeader">
            <h3>I'm Apurv</h3>
              <span id="animatedWhoAmI"></span>
          </div>
          <button id="enterWebsite" className="top-margin-mini landingPageEnterButton">Find Out More</button>
          <Socials/>
        </div> */}
        <Navbar/>

      </div>
      );
    }
  }
