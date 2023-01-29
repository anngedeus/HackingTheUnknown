import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function LocationInfo(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.description}</p>
    </div>
  );
}
