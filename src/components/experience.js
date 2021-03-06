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
                  <div className = "experience-box">
                    <IndividualExperienceBox
                            title = "Intern"
                            companyName = "Sapient Nitro"
                            year = "2016"
                            description = "UX maintenance using JQuery "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}