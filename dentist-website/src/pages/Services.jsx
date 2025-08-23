import { Link } from "react-router-dom";

const Services = () => {
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

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p>We offer a wide range of dental treatments...</p>
      <ul className="mt-4 list-disc pl-6">
        {services.map((service, index) => (
          <li key={index}>
            <Link
              to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-blue-500 hover:underline"
            >
              {service}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
