import { useParams } from "react-router-dom";

const LocationDetail = () => {
  const { locationId } = useParams();
  const name = locationId.replace(/-/g, " ");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 capitalize">{name}</h1>
      <img
        src="https://via.placeholder.com/800x400?text=Location+Photo"
        alt={name}
        className="rounded shadow mb-4"
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!..."
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LocationDetail;
