import { useEffect, useRef, useState } from "react";
import { GOOGLE_MAPS_API } from "./config";
import locationData from "./dataExports";
import {APIProvider, Map, Pin, AdvancedMarker, InfoWindow} from '@vis.gl/react-google-maps';

const LocationMap = () => {

  const [selected, setSelected] = useState(null);

  return(

    <APIProvider apiKey={GOOGLE_MAPS_API} onLoad={() => console.log('Maps API has loaded.')}>
  
    <div className="mt-10" style={{ width: '100%', height:'600px'}}>
      <Map
      defaultZoom={14}
      defaultCenter={{lat:24.8245963035883, lng:-107.39473227743593}}
      mapId='7a5f94b927fc04aebc07a986'
      >
        {locationData.map((location,i)=>(
      <AdvancedMarker
      key={location.name}
      position={location.location}
      onClick={()=> setSelected(location)}>
        <Pin background={'#2c7dac'} glyphColor={'#000'} borderColor={'#000'}/>
        {selected && (
           <InfoWindow
              position={selected.location}
              onCloseClick={() => setSelected(null)}
            >
              <div>
                <h3 className="font-bold">{selected.name}</h3>
                <p>{selected.address}</p>
                <a
                  href={`/locations/${selected.id}`} // Example route
                  className="text-blue-500 underline"
                >
                  Ver detalles
                </a>
              </div>
            </InfoWindow>
        )}

      </AdvancedMarker>
    ))}
    </Map>
    

    </div>

    
  </APIProvider>

  );

}

export default LocationMap;