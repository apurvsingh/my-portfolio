import React, { Component } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";

export class Navbar extends Component{
    render(){
        return(
           <div className="navbar">
                <nav>
                    <a href="#first"><i></i>About</a>
                    <a href="#second"><i></i>Services</a>
                    <a href="#third"><i></i>My Skills</a>
                    <a href="#fourth"><i></i>Work Ex</a>
                    <a href="#fourth"><i></i>Peer Review</a>
                </nav>

                <div className= 'navContainer'> 
                <section className="navSection" id= 'first'>
                    <h1>First</h1>
                </section>

                <section className="navSection" id= 'second'>
                    <h1>Second</h1>
                </section>

                <section className="navSection" id= 'third'>
                    <h1>Third</h1>
                </section>

                <section className="navSection" id= 'fourth'>
                    <h1>Fourth</h1>
                </section>
                </div>
           </div> 
        );
    }
}