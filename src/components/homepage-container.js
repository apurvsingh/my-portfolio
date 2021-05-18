import React from 'react';
import { About } from './about';
import { Contact } from './contact';
import { Experience } from './experience';
import { MySkills } from './my-skills';
import { NavbarComponent } from './navbar';
import { Services } from './services';
import { Testimonial } from './testimonials';

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
              <Services/>
              <MySkills/>
              <Experience/>
              <Testimonial/>
              <Contact/>
            </div>
          </div>          
);
    }
}
