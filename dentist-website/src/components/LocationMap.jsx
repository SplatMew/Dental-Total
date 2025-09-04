import { useEffect, useRef, useState } from "react";
import { GOOGLE_MAPS_API } from "./config";
import locationData from "./locationData";
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
    </Map>
    {locationData.map((location,i)=>(
      <AdvancedMarker
      key={location.name}
      position={location.location}
      onClick={()=> setSelected(location)}>
        <Pin background={'#2c7dac'} glyphColor={'#000'} borderColor={'#000'}/>
        {selected && (
          <InfoWindow
          onCloseClick={()=> setSelected(null)}>

          </InfoWindow>
        )}

      </AdvancedMarker>
    ))}

    </div>

    
  </APIProvider>

  );

}

export default LocationMap;