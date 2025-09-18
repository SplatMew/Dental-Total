import { useParams, useLocation } from "react-router-dom";
import BotonCita from "../components/BotonCita";

const LocationDetail = () => {
  const { locationId } = useParams();
  const { state } = useLocation();

  const name = locationId.replace(/-/g, " ");
  const mapSrc = state?.embed;
  const locImg = state?.img;
  const locTel = state?.tel;
  const locDir = state?.dir;
  const locHor = state?.hour1;
  const locSab = state?.hour2;
  const locDom = state?.hour3;

  return (
    <div className="p-6 flex flex-col sm:flex-row justify-around items-center">
      <div className="flex flex-col sm:flex-row justify-around items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4 capitalize">{name}</h1>

          {locTel ? <p>{locTel}</p> : <p>No hay Telefono disponible.</p>}
          {locDir ? <p>{locDir}</p> : <p>No hay direccion disponible.</p>}
          {locHor ? (
            <div>
              <p>Lunes a Viernes</p>
              <p>{locHor}</p>
              <p>Sábados</p>
              <p>{locSab}</p>
              <p>Domingos</p>
              {locDom ? (<p>{locDom}</p>):(<p>Cerrado</p>)}
            </div>
          ) : (
            <p>No hay Horario disponible.</p>
          )}
          <BotonCita />
        </div>

        {mapSrc ? (
          <iframe
            src={mapSrc}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        ) : (
          <p>No hay mapa disponible.</p>
        )}
      </div>

      <div>
        {" "}
        {locImg ? (
          <img src={locImg} alt={name}></img>
        ) : (
          <p>No hay imagen disponible.</p>
        )}
      </div>
    </div>
  );
};

export default LocationDetail;
