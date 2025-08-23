import { useState } from "react";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md">
      <img
        src={images[current]}
        alt="treatment"
        className="w-full h-full object-cover transition-all duration-500"
      />
      <button
        className="absolute left-0 top-1/2 bg-black bg-opacity-50 text-white p-2"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-0 top-1/2 bg-black bg-opacity-50 text-white p-2"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
