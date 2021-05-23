import './App.css';
import React from 'react';
import { LandingPage } from 'components/landing-page';
import { HomepageContainer } from 'components/homepage-container';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>                
        <Route path = '/home' component = { HomepageContainer }/>            
        <Route path = '/' component = { LandingPage }/>            
      </Switch>
    </>
    
  );
}

export default App;
