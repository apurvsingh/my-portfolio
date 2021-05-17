import React, { Component } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

export class Socials extends Component{
    render(){
        return(
            <div className="socials top-margin-mini">
                <a href="https://github.com/apurvsingh" target="blank">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/apurv-singh-6b6600112/" target="blank">
                    <FaLinkedin/>
                </a>
                <a href="https://www.hackerrank.com/apurvsingh95" target="blank">
                    <FaHackerrank/>
                </a>
            </div>
        );
    }
}
