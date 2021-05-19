import { Component } from 'react';
import PropTypes from 'prop-types';
import React from 'react';

export class IndividualService extends Component{
    render(){
        return(
          <div>
            <div className = "service-icon">
              <span className = "service-icon-rotate"> 
                { this.props.icon }
              </span>
            </div>
            <div className = "service-title"> 
              { this.props.title }
            </div>
            <div className = "service-desc">
              { this.props.description } 
            </div>
          </div>
        );
    }
}


IndividualService.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.any,
};