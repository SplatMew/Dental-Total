import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

import { serviceData } from "../components/dataExports";

const Services = () => {
  return (
    <div className="p-6 space-y-6 khula-regular">
      <h1 className="text-3xl sm:text-5xl khula-bold mt-10 mb-4 dental-title">
        Nuestros Servicios
      </h1>
      <p className="text-2xl">
        Brindamos atención especializada en la colocación de brackets,
        blanqueamientos dentales, endodoncias, extracciones dentales, limpiezas
        profesionales, resinas dentales, gingivectomías, así como cambio de
        ligas y la elaboración de placas totales, siempre priorizando la
        comodidad y la seguridad de nuestros pacientes.
      </p>
      <Carousel
        items={serviceData}
        settings={{
          slidesToShow: 4,
          slidesToScroll: 4,
          responsive: [
            {
              breakpoint: 1024,
              settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        }}
        clickable={true}
      />
    </div>
  );
};

export default Services;
