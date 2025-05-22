import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


function EmergencyFeed() {

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

 
  
  const [emergencyFeed, setEmergencyFeed]= useState([{
    id:1,
    alertType:"Keyword | 'Help!",
    time:5,
    acknowledged:true,
    coordinates: [40.7128, -74.0060]
  },
  {
    id: 2,
    alertType: "Button Press",
    time: 2,
    acknowledged: false,
    coordinates: [51.5074, -0.1278]
  },
  {
    id: 3,
    alertType: "Voice | 'Emergency'",
    time: 10,
    acknowledged: true,
    coordinates: [35.6762, 139.6503]
  }
  ]);

  return(
    <div className="w-full rounded-lg border-1 border-[#112e34] bg-[#111e2e] mt-2 pb-2">
      <div className="flex flex-row justify-between w-full p-4">
        <p className="text-[16px]">Emergency Feed</p>
        <p className="text-[#bebdbd] text-[14px]">ON</p>
      </div>

      {emergencyFeed.map((emergency,idx)=>(
       
      <div key={emergency.id} className="flex flex-row justify-between items-center p-2 max-[380px]:pr-0 border-t-1 border-[#112e34]">

        <div className="flex flex-col pl-2">
          <p className="text-[16px]">{emergency.alertType}</p>
          <p className="text-[#bebdbd]">{emergency.time} min ago</p>
          <button className="text-[14px] w-30 bg-[#192c30] cursor-pointer mt-2 p-1 rounded-[16px]">Acknowledge</button>
        </div>
        <div >
            <div className="map w-25 h-22 bg-[#0b111d] mr-5">
              <MapContainer center={[emergency.coordinates[0], emergency.coordinates[1]]} zoom={2} style={{ height: "100%", width: "100%" }} zoomControl={false}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={[emergency.coordinates[0], emergency.coordinates[1]]}>
                  <Popup>
                    <b>Location {idx + 1}</b><br />
                    Lat: {emergency.coordinates[0]}, Lon: {emergency.coordinates[1]}<br />
                    <a href={`https://www.google.com/maps?q=${emergency.coordinates[0]},${emergency.coordinates[1]}`} target="_blank" rel="noopener noreferrer">
                      Open in Maps
                    </a>
                  </Popup>
                </Marker>

              </MapContainer>
            </div> 
            </div>
        </div>
        
      ))}

    </div>
  );
}

export default EmergencyFeed;
