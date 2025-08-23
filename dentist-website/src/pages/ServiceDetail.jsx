import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const name = serviceId.replace(/-/g, " ");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 capitalize">{name}</h1>
      <p>Detailed information about {name} will go here.</p>
    </div>
  );
};

export default ServiceDetail;
