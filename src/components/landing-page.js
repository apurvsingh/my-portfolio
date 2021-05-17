import React from 'react';
import { ParticleBackground } from './particle-background';

export class LandingPage extends React.Component {
    render() {
      return (<div>
          <div className="landingPageHeader">
            <h2 >I'm Apurv</h2>
              <div id="animatedWhoAmI">
                <span></span>
              </div>
          </div>
          <ParticleBackground/>
      </div>);
    }
  }
