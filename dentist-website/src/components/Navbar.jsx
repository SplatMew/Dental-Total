import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logos/dental-total-logo3.png";
import { whatsapp_logo, facebook_logo } from "./images";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const services = [

    "Implantes",
    "Ortodoncia",
    "Blanqueamiento",
    "Limpieza",
    "Endodoncia",
    "Extracción",
    "Prótesis"
  ];

  const locations = ["Location 1", "Location 2", "Location 3", "Location 4", "Location 5", "Location 6"];

  return (
    <>
      <style jsx>{`
        .dropdown-link {
          position: relative;
        }
        .dropdown-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #3b82f6;
          transition: width 0.3s ease-in-out;
        }
        .dropdown-link:hover::after {
          width: 100%;
        }
      `}</style>
      
      <nav className=" text-white sticky top-0 z-50 shadow-md khula-regular lg:text-2xl sm:text-auto ">
        <div className="dental-navbar px-6 py-4 mx-auto flex justify-around items-center">
          <Link to="/"><img className="dental-total-logo" src={logo} alt="Logo" /></Link>
          <ul className="flex space-x-6 " >
            <li className="hover:text-blue-200 transition-colors duration-200 py-2 pr-6 flex items-center border-r-1">< Link to="/">Home</Link></li>
            <li className="hover:text-blue-200 transition-colors duration-200 py-2 pr-6 flex items-center border-r-1"><Link to="/about">Sobre Nosotros</Link></li>

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link to="/servicios" className="hover:text-blue-200 transition-colors duration-200 py-2 pr-6 flex items-center border-r-1">Servicios</Link>
              <ul className={`absolute top-full left-0 navbar-fade text-black shadow-lg mt-2 rounded-lg min-w-[200px] z-50
                transition-all duration-300 ease-in-out transform
                ${servicesOpen 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2'}`}>
                {services.map((service, index) => (
                  <li key={index} className="overflow-hidden">
                    <Link 
                      to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="dropdown-link block px-4 py-3 hover:bg-gray-100 transition-colors duration-200 text-base first:rounded-t-lg last:rounded-b-lg"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Locations Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <Link to= "ubicaciones" className="hover:text-blue-200 transition-colors duration-200 py-2 pr-6 flex items-center border-r-1">Ubicaciones</Link>
              <ul className={`absolute top-full left-0 navbar-fade text-black shadow-lg mt-2 rounded-lg min-w-[200px] z-50
                transition-all duration-300 ease-in-out transform
                ${locationsOpen 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2'}`}>
                {locations.map((loc, index) => (
                  <li key={index} className="overflow-hidden">
                    <Link 
                      to={`/locations/${loc.toLowerCase().replace(/\s+/g, "-")}`}
                      className="dropdown-link block px-4 py-3 hover:bg-gray-100 transition-colors duration-200 text-base first:rounded-t-lg last:rounded-b-lg"
                    >
                      {loc}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="hover:text-blue-200 transition-colors duration-200 py-2 pr-6 flex items-center border-r-1"><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>
        <div className="navbar-fade text-black flex text-2xl khula-semibold justify-center">
        <img className="p-2 social-logos" src={whatsapp_logo} alt="whatsapp" />
        <a className="p-2 hover:text-blue-400" href="https://web.whatsapp.com/send/?phone=%2B526671803379">667-180-3379</a>
        <a className="p-2 social-logos" href="https://www.facebook.com/profile.php?id=100064101213007"><img src={facebook_logo} alt="facebook" /></a>        
      </div>
      </nav>
      
    </>
  );
};

export default Navbar;