import { Component } from 'react';
import PropTypes from 'prop-types';
import React from 'react';

export class IndividualExperienceBox extends Component{
    render(){
        return(
          <div>
            <div className = "experience-title"> 
              { this.props.title }
            </div>
            <div id = "company" className = "experience-company">
              { this.props.companyName } 
            </div>
            <div id = "companyName" className = "experience-desc">
              { this.props.year } 
            </div>
            <div id = "projectDesc" className = "experience-desc" dangerouslySetInnerHTML = { { __html: this.props.description  } }>
            </div>
          </div>
        );
    }
}


IndividualExperienceBox.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    year: PropTypes.string,
    companyName: PropTypes.string,
};