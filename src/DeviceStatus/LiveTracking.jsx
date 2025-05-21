
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
     const toggleLlvtracking = () => {
       setIsOn(!isOn);
       
   
     };
      const emergencies = [
    { id: 1, coordinates: [28.644800, 77.216721] }, 
    { id: 2, coordinates: [19.076090, 72.877426] }, 
    { id: 3, coordinates: [13.082680, 80.270718] }, 
  ];

  return <div className="bg-[#111e2e] rounded-lg border-[#112e34] w-full min-w-[300px] mt-2 mb-2 p-2">
    <div className=" h-30 w-full bg-[#0b111d] border-b-1 border-[#112e34]">
      <MapContainer
          center={[22.9734, 78.6569]} // Center of India
          zoom={4}
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
                <a
                  href={`https://www.google.com/maps?q=${emergency.coordinates[0]},${emergency.coordinates[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Maps
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
    </div>
    <div className="flex flex-row justify-between p-2">  
      <div className="flex justify-between ml-2">
        <div className="h-3 w-3 rounded-full bg-[#0f6667] mr-2 mt-2 flex flex-row justify-center items-center">
          <div className="h-2 w-2 rounded-full bg-[#37b2b6]"></div>
        </div>
      <p>LlvTracking</p>
       </div>
    
      <div
      onClick={toggleLlvtracking}
      className={`w-7 h-5 bg-gray-800 flex items-center rounded-full p-1 mt-2 cursor-pointer transition-colors duration-300 `}
    >
      <div
        className={`bg-[#37b2b6] w-3 h-3 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? 'translate-x-2' : 'translate-x-0'
        }`}
      />
    </div>
      </div>
        </div>
   
   

  ;
}

export default LiveTracking;
