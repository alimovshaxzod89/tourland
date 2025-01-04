import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 41.2974, // Tashkent koordinatalari
  lng: 69.2564,
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyApdnBLqJeVW4c5tlZ32vBBzVBVWyJnYlg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {/* Markerni joylashtirish */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
