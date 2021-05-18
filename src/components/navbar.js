import React, { Component } from 'react';
import {  Nav } from 'react-bootstrap';

export class NavbarComponent extends Component{
    render(){
        return(
          <div className = "navbar">
            <Nav
  activeKey = "/home"
  onSelect = { (selectedKey) => alert(`selected ${selectedKey}`) }
            >
              <Nav.Item>
                <Nav.Link href = "/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey = "link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey = "link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey = "disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        );
    }
}