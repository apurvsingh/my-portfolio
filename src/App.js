import './App.css';
import React from 'react';
import { LandingPage } from 'components/landing-page';
import { About } from 'components/about';
import { Contact } from 'components/contact';
import { Experience } from 'components/experience';
import { HomepageContainer } from 'components/homepage-container';
import { MySkills } from 'components/my-skills';
import { Testimonial } from 'components/testimonials';
import { Switch, Route } from 'react-router-dom';
import { Services } from 'components/services';

function App() {
  return (
    <>
      <Switch>                
        <Route path = '/home/about' component = { About }/>  
        <Route path = '/home/services' component = { Services }/>  
        <Route path = '/home/mySkills' component = { MySkills }/>
        <Route path = '/home/experience' component = { Experience }/>               
        <Route path = '/home/testimonial' component = { Testimonial }/>  
        <Route path = '/home/contact' component = { Contact }/>            
        <Route path = '/home' component = { HomepageContainer }/>            
        <Route path = '/' component = { LandingPage }/>            
      </Switch>
      {/* <div>
        <LandingPage />
      </div> */}
    </>
    
  );
}

export default App;
