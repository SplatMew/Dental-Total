import { useParams, useLocation } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { state } = useLocation();
  const name = state?.name;
  const servImg = state?.image;
  const servInf = state?.info;

  return (
    <div className="space-x-5 flex flex-col sm:flex-row justify-around p-10">
      <div>
        <h1 className="text-3xl sm:text-5xl khula-bold mt-10 mb-4 dental-title">{name}</h1>
        {servInf ? <p className="w-auto sm:w-100 lg:w-200 lg:text-2xl sm:text-xl space-y-6">{servInf}</p> : <p>No hay información disponible.</p>}
      </div>
      <div>
        
        {servImg ? (
          <img className="w-200 rounded-4xl" src={state.image} alt={name}></img>
        ) : (
          <p>No hay imagen disponible.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
