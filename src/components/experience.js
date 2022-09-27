import React from 'react';
import { IndividualExperienceBox } from './individual-experience-box';

export class Experience extends React.Component {
    render(){
        return(
          <div id = "experience"  className = "offwhiteSection">
            <div className = "experience-section">
              <div className = "inner-width">
                <h1 className = "section-title-dark">My Experience</h1>
                <div className = "border-dark"></div>

                <div className = "component-container">

                  <div className = "experience-box">
                    <IndividualExperienceBox
                            title = "Engineering Intern"
                            companyName = "Publicis Sapient, UPS Client"
                            year = "2022"
                            description = " 'A-B testing' to drive feature selection for UPS(ups.com) package shipping/tracking flow<br>Bayes' theorem for modeling data<br>Adobe Analytics to build powerful dashboards that provide real-time insights<br>Video analysis to identify the bottlenecks faced by the user resulting in dropouts<br>Typical data lifecycle in a cloud-powered environment."
                    />
                  </div>

                  <div className = "experience-box">
                    <IndividualExperienceBox
                        title = "Software Engineer 2"
                        companyName = "Dell"
                        year = "2018-2021"
                        description = "Dell universal payment gateway using microservices &amp; micro frontend architecture<br>Dell b2b product subscription system<br>Dell b2b Checkout flow for Canada &amp; code migration from legacy"
                    />
                  </div>
                  <div className = "experience-box">
                    <IndividualExperienceBox
                            title = "Software Engineer 1"
                            companyName = "Dell"
                            year = "2017-2018"
                            description = "Full stack development to create the b2b checkout flow for a 'Bill Anywhere-Ship Anywhere' global portal system "
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
    }
}