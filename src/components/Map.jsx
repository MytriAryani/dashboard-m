import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useLocation } from "react-router-dom";
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

function MapUpdater({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 13);
  }, [lat, lng, map]);

  return null;
}

function Map() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lat = parseFloat(queryParams.get("lat")) || 17.385;
  const lng = parseFloat(queryParams.get("lng")) || 78.4867;

  return (
    <div className="h-[80vh] w-full rounded-lg mt-5 ">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            <b>Selected Location</b><br />
            Lat: {lat}, Lng: {lng}
          </Popup>
        </Marker>
        <MapUpdater lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
}

export default Map;
