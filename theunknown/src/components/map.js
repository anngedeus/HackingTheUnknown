import React, { useState } from "react";
import { useNavigate } from "react-router";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../styles/map.css";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAzsD0wpGhv5vf97YutaAJ_ZCMWf2_Q9po",
  });

  if (!isLoaded) return <div> Loading...</div>;

  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 29.65, lng: -82.324829 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
}