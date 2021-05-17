import React from "react";
import Particles from "react-particles-js";

export class ParticleBackground extends React.Component {
    render() {
      return (<div id="particleBackground">
        <Particles
          params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }} />
      </div>);
    }
  }