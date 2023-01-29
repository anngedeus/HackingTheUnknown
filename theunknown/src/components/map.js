import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../styles/map.css";

export default function Map(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAzsD0wpGhv5vf97YutaAJ_ZCMWf2_Q9po",
  });

  if (!isLoaded) return <div> Loading...</div>;

  const locations = [
    {
      name: "Ben Hill Griffin Stadium",
      location: {
        lat: 29.650085822603693,
        lng: -82.34869769334125,
      },
    },
    {
      name: "Celebration Pointe",
      location: {
        lat: 29.625387812229945,
        lng: -82.39561279218728,
      },
    },
    {
      name: "Satchel's Pizza",
      location: {
        lat: 29.67422859253315,
        lng: -82.30193844659703,
      },
    },
  ];

  return (
    <div>
      <GoogleMap
        zoom={12}
        center={{ lat: 29.65, lng: -82.324829 }}
        mapContainerClassName="map-container"
      >
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => props.onMarkerClick(item)}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
}
