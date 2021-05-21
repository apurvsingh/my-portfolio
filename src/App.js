import './App.css';
import React from 'react';
import { LandingPage } from 'components/landing-page';
import { About } from 'components/about';
import { Contact } from 'components/contact';
import { Experience } from 'components/experience';
import { HomepageContainer } from 'components/homepage-container';
import { Switch, Route } from 'react-router-dom';
import { ServicesAndSkills } from 'components/services';
// import Testimonials from 'components/testimonials';

function App() {
  return (
    <>
      <Switch>                
        <Route path = '/home/about' component = { About }/>  
        <Route path = '/home/services' component = { ServicesAndSkills }/>  
        <Route path = '/home/experience' component = { Experience }/>               
        {/* <Route path = '/home/testimonial' component = { Testimonials }/>   */}
        <Route path = '/home/contact' component = { Contact }/>            
        <Route path = '/home' component = { HomepageContainer }/>            
        <Route path = '/' component = { LandingPage }/>            
      </Switch>
    </>
    
  );
}

export default App;
