import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';

import { promo1, promo2, promo3 } from "../components/images";

const Carousel = ({items, settings = {}, clickable = false}) => {
  const imageSliderRef = useRef(null);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    ...settings,
  };

  return (
  
    <div className="relative w-full lg:h-120 sm:h-60 overflow-hidden">
      <Slider {...carouselSettings} ref={imageSliderRef}>
        {items.map((item, index) => {
          const content = (
            <img src={item.image} alt={item.title || `slide-${index}`}
            className="w-full h-100 object-cover rounded-lg " style={{outline: "none"}} 
            />
          );

           return (
            <div key={index} className="px-2">
              {clickable && item.link ? (

                <a href={item.link} target="_self">{content}
                  {item.title && (
                    <p className="text-center mt-2 font-semibold">{item.title}</p>
                  )}</a>
                
              ) : (
                <>
                  {content}
                  {item.title && (
                    <p className="text-center mt-2 font-semibold">{item.title}</p>
                  )}
                </>
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
