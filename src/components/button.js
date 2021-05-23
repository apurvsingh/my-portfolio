import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MyButton extends Component{
    render(){
        return(
          <div>
            <a
                href = { this.props.link }
                style = { { fontSize : this.props.fontSize  } } 
                id = { this.props.id }
                className = "top-margin-mini landingPageEnterButton"
            >
              {this.props.caption}
            </a>
          </div>
        );
    }
}

MyButton.defaultProps = {
    caption: 'button',
    fontSize: '1em',
    id: 'id',
    link: '',
};

MyButton.propTypes = {
    caption: PropTypes.any,
    fontSize: PropTypes.string,
    id: PropTypes.string,
    link: PropTypes.string,
};
  