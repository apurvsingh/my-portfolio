import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import profilePicture from '../mediaSources/tt.jpg'
import { FaLinkedin, FaQuoteRight } from 'react-icons/fa';
import SwiperCore, {
    Pagination
  } from 'swiper/core';
  
// install Swiper modules
SwiperCore.use([Pagination]);
  
export class Testimonial extends React.Component {
    render(){
        return(
          <div id = "testimonial" className = "greySection">
            <div className = "testimonial-section">
              <div className = "inner-width">
                <h1 className = "section-title-dark">Testimonial</h1>
                <div className = "border-dark"></div>

                <div>
                  <Swiper
                        slidesPerView = { 2 }
                        spaceBetween = { 1 }
                        freeMode = { false }
                        pagination = { { clickable: true } }
                        loop = { true }
                        effect = "fade"
                        initialSlide = { 0 }
                  >
                    {GetTestimonialJsx('Sujith Nair', 'Senior Principal Software Engineer, Dell', 'Apurv joined us as a fresher and took rapid steps towards his development. He is a great full-stack developer and a reliable teammate')}
                    {GetTestimonialJsx('Biju Nair', 'Principal Software Engineer, Dell', 'Having worked closely with Apurv, I can vouch for his knowledge, attention to detail and work ethic. He has grown as a web developer and was a vital part of my team')}
                    {GetTestimonialJsx('Mahammmad Hanief', 'Senior Principal Software Engineer', 'I am Apurv\'s former teamlead and have worked with him for over a year. He is talented developer, a great team player and can yet independently. He is a dependable and a great person to have on the team.')}
                    {GetTestimonialJsx('T Sita', 'Director of Engineering, Dell', 'Apurv is one of our brightest fresher recruits and exceeded all expectations. He\'s a solid developer, is approachable and his work speaks for himself.')}

                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

function GetTestimonialJsx(name, postion, content){
return (
  <SwiperSlide>
    <div className = "testimonial-box">
      <div className = "quote">
        <FaQuoteRight/>
      </div>
      <br/> 
      <div className = "content">
        { content }
        <div className = "details">
          <div className = "imgBx">
            <img src = { profilePicture } alt = "Profile Picture"></img>
            <a href = "https://www.linkedin.com/in/apurv-singh-6b6600112/" target = "blank">
              <FaLinkedin/>
            </a>
          </div>
          <h3 >
            {name}
          </h3>
          <br/> 
          <span> 
            { postion }
          </span>
        </div>
      </div>
    </div>
  </SwiperSlide>
);
}