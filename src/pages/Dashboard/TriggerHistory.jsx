import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


function TriggerHistory() {

  delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

  const [coordinates, setCoordinates]=useState([
    [40.7128, -74.0060], // New York City
    [51.5074, -0.1278],  // London
    [35.6762, 139.6503] //tokyo
  ]);

 
  
  const [TriggerHistory, setTriggerHistory]= useState([{
    id:1,
    alertType:"Keyword | 'Help!",
    date:"Apr 10 2025",
    timeStamp:"10:30 AM",
    coordinates: [40.7128, -74.0060]
  },
  {
    id: 2,
    alertType: "Button Press",
    date:"Apr 10 2025",
    timeStamp:"10:30 AM",
    coordinates: [51.5074, -0.1278]
  },
  {
    id: 3,
    alertType: "Voice | 'Emergency'",
    date:"Apr 10 2025",
    timeStamp:"10:30 AM",
    coordinates: [35.6762, 139.6503]
  }
  ]);

  return(
    <div className="w-[60%] ml-4 mr-4 max-[750px]:w-full rounded-lg border-1 border-[#112e34] bg-[#111e2e] mt-2 pb-2">
      <div className="flex flex-row justify-between w-full p-4">
        <p className="text-[16px]">Trigger History</p>
        
      </div>

      {TriggerHistory.map((emergency,idx)=>(
       
      <div key={emergency.id} className="flex flex-row justify-between items-center p-2 max-[380px]:pr-0 border-t-1 border-[#112e34]">

        <div className="flex flex-col pl-2">

          <div className="flex flex-row flex-wrap"><p  className="text-[#bebdbd]">{emergency.date},</p>
          <p className="text-[#bebdbd]">{emergency.timeStamp}</p></div>
          <p className="text-[16px]">{emergency.alertType}</p>

        </div>
        <div >
            <div className="map w-25 h-22 bg-[#0b111d] mr-5">
              <a href="/dashboard">
              <MapContainer center={[emergency.coordinates[0], emergency.coordinates[1]]} zoom={2} style={{ height: "100%", width: "100%" }} zoomControl={false}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={[emergency.coordinates[0], emergency.coordinates[1]]}>
                  <Popup>
                    <b>Location {idx + 1}</b><br />
                    Lat: {emergency.coordinates[0]}, Lon: {emergency.coordinates[1]}<br />
                  </Popup>
                </Marker>

              </MapContainer>
              </a>
            </div> 
            </div>
        </div>
        
      ))}

    </div>
  );
}

export default TriggerHistory;
