
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
 
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function LiveTracking() {
   const [isOn, setIsOn] = useState(true);
     const toggleLivetracking = () => {
       setIsOn(!isOn);
       
   
     };
      const emergencies = [
        { id: 1, coordinates: [17.385000, 78.486700] },
        { id: 2, coordinates: [17.385110, 78.486700] },
        { id: 3, coordinates: [17.385360, 78.486700] },
        { id: 4, coordinates: [17.385490, 78.486700] }
      ];
      const center = [
        emergencies.reduce((sum, e) => sum + e.coordinates[0], 0) / emergencies.length,
        emergencies.reduce((sum, e) => sum + e.coordinates[1], 0) / emergencies.length
      ];


  return <div className="flex-1 min-w-[204px] bg-[#111e2e] h-full rounded-lg border-[#112e34] w-full min-w-[20px]  pb-0 ">
    <p className='m-2 h-8'>Location Tracker</p>
    <div className=" h-50 w-full  p-2 pt-0">
      <a href="/dashboard">
      <MapContainer
          center={center} 
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />
          {emergencies.map((emergency, idx) => (
            <Marker key={emergency.id} position={emergency.coordinates}>
              <Popup>
                <b>Location {idx + 1}</b><br />
                Lat: {emergency.coordinates[0]}, Lon: {emergency.coordinates[1]}<br />
                
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        </a>
    </div>
    
        </div>
   
   

  ;
}

export default LiveTracking;
