import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../styles/locationInfo.css";

export default function LocationInfo(props) {
  return (
    <div>
      <p className="locInfo" id="loc-name">
        {props.name}
      </p>
      <p className="locInfo" id="address">
        {props.address}
      </p>
      <p className="locInfo" id="description">
        {props.description}
      </p>
    </div>
  );
}
