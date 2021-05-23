import tt  from '../mediaSources/tt.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Pagination
} from 'swiper/core';
import { FaLinkedin, FaQuoteRight } from 'react-icons/fa';
import React from 'react';
import { useWindowSize } from 'hooks/screenWidthHook';

SwiperCore.use([Pagination]);

function Testimonials(){
    const screenWidth = useWindowSize().width;
      return(
        <div id = "testimonial" className = "greySection">
          <div className = "testimonial-section">
            <div className = "inner-width">
              <h1 className = "section-title-dark">Testimonial</h1>
              <div className = "border-dark"></div>
              <div className = "component-container">
                <Swiper
                  slidesPerView = { GetNumberOfSlides(screenWidth) }
                  spaceBetween = { 1 }
                  freeMode = { false }
                  pagination = { { clickable: true } }
                  loop = { true }
                  effect = "fade"
                  initialSlide = { 0 }
                >
                  {GetTestimonialJsx('Sujith Nair', 'Senior Principal Software Engineer, Dell', 'Apurv joined us as a fresher and took rapid steps towards his development. He is a great full-stack developer and a reliable teammate', tt, 'https://www.linkedin.com/in/scnair/')}
                  {GetTestimonialJsx('Biju Nair', 'Principal Software Engineer, Dell', 'Having worked closely with Apurv, I can vouch for his knowledge, attention to detail and work ethic. He has grown as a web developer and was a vital part of my team', tt, 'https://www.linkedin.com/in/bijunair1/')}
                  {GetTestimonialJsx('M. Hanief', 'Senior Principal Software Engineer, Dell', 'I am Apurv\'s former teamlead and have worked with him for over a year. He is talented developer, a great team player and can yet independently. He is a dependable and a great person to have on the team.', tt, 'https://www.linkedin.com/in/hanief-mahammad-3480942/')}
                  {GetTestimonialJsx('T Sita', 'Director of Engineering, Dell', 'Apurv is one of our brightest fresher recruits and exceeded all expectations. He\'s a solid developer, is approachable and his work speaks for himself.', tt, 'https://www.linkedin.com/in/sita-c/')}
                </Swiper>
                
              </div>
            </div>
          </div>
        </div>
      );
}

function GetTestimonialJsx(name, position, description, profilePicture, linkedinLink ){
  return (
    <SwiperSlide>
      <div className = "testimonial-box">
        <div className = "text testimonial-min-height">
          { description }
          <i>
            <FaQuoteRight/>
          </i>
        </div>  
        <div className = 'testimonial-person text'> 
          <span> 
            { name }
          </span>
          <span className = "testimonial-social"> 
            <a href = { linkedinLink } target = "blank">
              <FaLinkedin/>
            </a>
          </span>
          <div className = "top-margin-xs">
            { position }
          </div>
        </div>
        
        <div className = "testimonial-footer">
          <img src = { profilePicture } className = "testimonial-image"></img>
        </div>
      </div>
    </SwiperSlide>
);
}

function GetNumberOfSlides(width){
  if(width <= 480){
    return 1;
  }

  if(width <= 768){
    return 1;
  }
  
  return 3;
}

export default Testimonials;
