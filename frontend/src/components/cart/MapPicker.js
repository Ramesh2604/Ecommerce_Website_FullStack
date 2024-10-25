import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'; // Example using Google Maps

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 11.1271, // Latitude for Tamil Nadu, India
  lng: 78.6569, // Longitude for Tamil Nadu, India
};

export default function MapPicker({ setLocation }) {
  const [selected, setSelected] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Your Google Maps API key
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  const onMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelected({ lat, lng });
    setLocation({ lat, lng });
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={7} // Adjust zoom level as necessary
      center={defaultCenter} // Set initial center to Tamil Nadu
      onClick={onMapClick}
    >
      {selected && <Marker position={selected} />}
    </GoogleMap>
  );
}
