import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Carousel = ({ items, settings = {}, clickable = false }) => {
  const imageSliderRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    ...settings,
    // 👇 se disparan cuando slick detecta movimiento
    beforeChange: () => setDragging(true),
    afterChange: () => setDragging(false),
  };

  const handleClick = (e) => {
    if (dragging) {
      e.preventDefault(); // 🚫 evita que <Link> navegue si venimos arrastrando
      e.stopPropagation();
    }
  };

  return (
    <div className="relative w-full lg:h-120 sm:h-60 overflow-hidden">
      <Slider {...carouselSettings} ref={imageSliderRef}>
        {items.map((item, index) => {
          const content = (
            <img
              src={item.image}
              alt={item.title || `slide-${index}`}
              className="w-full h-100 object-cover rounded-lg"
              style={{ outline: "none" }}
            />
          );

          return (
            <div key={index} className="px-2">
              {clickable && item.name ? (
                <Link
                  to={`/servicios/${item.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  state={item}
                  target="_self"
                  onClick={handleClick} // 👈 aquí interceptamos el click
                >
                  {content}
                  {item.title && (
                    <p className="text-center mt-2 font-semibold">
                      {item.title}
                    </p>
                  )}
                </Link>
              ) : (
                <>
                  {content}
                  {item.title && (
                    <p className="text-center mt-2 font-semibold">
                      {item.title}
                    </p>
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