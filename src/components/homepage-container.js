import React from 'react';
import { About } from './about';
import { Contact } from './contact';
import { Experience } from './experience';
import { NavbarComponent } from './navbar';
import { ServicesAndSkills } from './services';
import Testimonials from './testimonials';

export class HomepageContainer extends React.Component {
    render(){
      
        return(
          <div>
            <div>
              <NavbarComponent backgroundColor = { '#02475e' }/>
            </div>       
            
            <br/>
            <div>
              <About/>
              <ServicesAndSkills/>
              <Experience/>
              <Testimonials/>
              <Contact/>
            </div>
          </div>          
);
    }
}
