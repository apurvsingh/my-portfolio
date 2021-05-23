import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaCheck, FaCopy } from 'react-icons/fa';

export class CopyToClipboard extends Component{

    constructor(){
        super();
            this.state={
            visible : false
        }
    }

    handleClick(e){
        e.preventDefault();
        this.setState({visible:true},()=>{
            window.setTimeout(()=>{
              this.setState({visible:false})
            },2000)
          });
        navigator.clipboard.writeText(this.props.elementToCopy.current.textContent)
    }
    
    render(){
        return(
          <div className = "copyToClipboard">
            <div
                onClick = { e => {
                    this.handleClick(e)
                } }
            >
              <FaCopy/>
              ( Click here to copy e-mail )
            </div>
            {this.state.visible &&
              <span className = "copied-notification"> 
                <span> 
                  <FaCheck/>
                </span>
                <span>Copied</span>
              </span>
            }
          </div>
        );
    }
}

CopyToClipboard.defaultProps = {
    elementToCopy: {}
};

CopyToClipboard.propTypes = {
    elementToCopy: PropTypes.any
};