import { Link } from "react-router-dom";

const Locations = () => {
  const locations = ["Location 1", "Location 2", "Location 3"];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Locations</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!..."
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      <ul className="mt-4 list-disc pl-6">
        {locations.map((loc, index) => (
          <li key={index}>
            <Link
              to={`/locations/${loc.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-blue-500 hover:underline"
            >
              {loc}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Locations;
