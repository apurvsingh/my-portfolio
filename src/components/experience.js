import React from 'react';
import { IndividualExperienceBox } from './individual-experience-box';

export class Experience extends React.Component {
    render(){
        return(
          <div id = "experience"  className = "offwhiteSection">
            <div className = "experience-section">
              <div className = "inner-widht">
                <h1 className = "section-title-dark">My Experience</h1>
                <div className = "border-dark"></div>

                <div className = "component-container">

                  <div className = "experience-box">
                    <IndividualExperienceBox
                        title = "Software Engineer 2"
                        companyName = "Dell"
                        year = "2018-2021"
                        description = "Full stack development to create a b2b product subscription system<br>New version of b2b code and subsequent code migration<brDell universal payment gateway"
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