import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MyButton extends Component{
    render(){
        console.log(this.props)
        return(
          <div>
            <button 
                style = { { fontSize : this.props.fontSize  } } 
                id = { this.props.id }
                className = "top-margin-mini landingPageEnterButton"
            >
              {this.props.caption}
            </button>
          </div>
        );
    }
}


MyButton.defaultProps = {
    caption: 'button',
    fontSize: '1em',
    id: 'id'
  };

MyButton.propTypes = {
    caption: PropTypes.any,
    fontSize: PropTypes.string,
    id: PropTypes.string,
};
  