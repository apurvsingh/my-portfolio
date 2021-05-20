import React from 'react';
import { GetTestimonialJsx } from './testimonial';
import tt  from '../mediaSources/tt.jpg'

  
export class Testimonial extends React.Component {
    render(){
        return(
          <div id = "testimonial" className = "greySection">
            <div className = "testimonial-section">
              <div className = "inner-width">
                <h1 className = "section-title-dark">Testimonial</h1>
                <div className = "border-dark"></div>
                <div className = "component-container">
                  {GetTestimonialJsx('Sujith Nair', 'Senior Principal Software Engineer, Dell', 'Apurv joined us as a fresher and took rapid steps towards his development. He is a great full-stack developer and a reliable teammate', tt)}
                  {GetTestimonialJsx('Biju Nair', 'Principal Software Engineer, Dell', 'Having worked closely with Apurv, I can vouch for his knowledge, attention to detail and work ethic. He has grown as a web developer and was a vital part of my team', tt)}
                  {GetTestimonialJsx('M. Hanief', 'Senior Principal Software Engineer, Dell', 'I am Apurv\'s former teamlead and have worked with him for over a year. He is talented developer, a great team player and can yet independently. He is a dependable and a great person to have on the team.', tt)}
                  {GetTestimonialJsx('T Sita', 'Director of Engineering, Dell', 'Apurv is one of our brightest fresher recruits and exceeded all expectations. He\'s a solid developer, is approachable and his work speaks for himself.', tt)}
                </div>
              </div>
            </div>
          </div>
        );
    }
}