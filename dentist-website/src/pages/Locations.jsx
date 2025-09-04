import { Link } from "react-router-dom";
import LocationMap from "../components/LocationMap";

const Locations = () => {
  return (
    <div className="text-gray-700 mr-6 ml-6 sm:mr-20 sm:ml-20">
      {/* Título principal */}
      <h1 className="khula-extrabold text-3xl sm:text-5xl mt-10 mb-6 text-gray-900">
        Nuestras Clínicas
      </h1>

      <div className="flex flex-col sm:flex-row">
        {/* Texto descriptivo y lista */}
        <div className="w-full sm:w-1/2 lg:w-2/5 p-6 sm:p-10">
          <h2 className="khula-semibold text-2xl lg:text-3xl text-blue-600 leading-snug mb-4">
            Estamos donde tú estás, porque tu sonrisa lo vale.
          </h2>

          <p className="khula-regular text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
            Hemos expandido nuestras sucursales para que recibas la misma
            atención y confianza en el lugar más cercano a ti.
          </p>

          <ul className="space-y-3 text-lg sm:text-xl khula-semibold">
            <li>
              <Link
                to="#"
                className="block border-b border-blue-400 text-blue-500 hover:text-blue-300 transition-colors duration-200 pb-1"
              >
                Dental Total Rosales
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block border-b border-blue-400 text-blue-500 hover:text-blue-300 transition-colors duration-200 pb-1"
              >
                Dental Total Carrasco
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block border-b border-blue-400 text-blue-500 hover:text-blue-300 transition-colors duration-200 pb-1"
              >
                Dental Total Escobedo
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block border-b border-blue-400 text-blue-500 hover:text-blue-300 transition-colors duration-200 pb-1"
              >
                Dental Total 6 de Enero
              </Link>
            </li>
          </ul>
        </div>

        {/* Mapa */}
        <div className="w-full sm:w-1/2 lg:w-3/5">
          <LocationMap />
        </div>
      </div>
    </div>
  );
};

export default Locations;
