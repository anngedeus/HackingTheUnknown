import React, { useState } from "react";

import { useNavigate } from "react-router";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "../styles/map.css";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAzsD0wpGhv5vf97YutaAJ_ZCMWf2_Q9po",
  });
  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
  };
  const position = { lat: 29.643946, lng: -82.355659 };
  const onLoad = (infoWindow) => {
    console.log("infoWindow: ", infoWindow);
  };

  if (!isLoaded) return <div> Loading...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 29.65, lng: -82.324829 }}
      mapContainerClassName="map-container"
    >
      <InfoWindow position={position} onLoad={onLoad}>
        <div style={divStyle}>
          <h1>InfoWindow</h1>
        </div>
      </InfoWindow>
    </GoogleMap>
  );
}
