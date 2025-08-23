import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const services = [
    "All On X",
    "Implants",
    "Orthodontics",
    "Whitening",
    "Veneers",
    "Cleaning",
    "Endodontics",
    "Extractions",
    "Prosthesis"
  ];

  const locations = ["Location 1", "Location 2", "Location 3"];

  return (
    <nav className="bg-blue-500 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Dental Total</Link>
        <ul className="flex space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre Nosotros</Link></li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button>Servicios</button>
            {servicesOpen && (
              <ul className="absolute bg-white text-black shadow-md mt-2 rounded">
                {services.map((service, index) => (
                  <li key={index} className="hover:bg-gray-200 px-4 py-2">
                    <Link to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Locations Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <button>Ubicaciones</button>
            {locationsOpen && (
              <ul className="absolute bg-white text-black shadow-md mt-2 rounded">
                {locations.map((loc, index) => (
                  <li key={index} className="hover:bg-gray-200 px-4 py-2">
                    <Link to={`/locations/${loc.toLowerCase().replace(/\s+/g, "-")}`}>
                      {loc}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
