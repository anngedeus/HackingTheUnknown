import { Grid, Paper, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Map from "./map";
import LocationInfo from "./LocationInfo";

export default function Main() {
  const { state } = useLocation();
  const { _id, name, visited } = state;

  const [numVisited, setVisited] = useState(visited);

  const [locInfo, setLocInfo] = useState({
    name: "",
    address: "",
    description: "",
  });

  async function incrementVisited() {
    await fetch("http://localhost:5000/update-visited", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setVisited(numVisited + 1);
  }

  async function onMarkerClick(loc) {
    console.log(loc);
    const response = await fetch("http://localhost:5000/get-location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loc),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    const resInfo = await response.json();
    setLocInfo({
      name: resInfo.name,
      address: resInfo.address,
      description: resInfo.description,
    });
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={10}
          sx={{ height: 300, marginTop: 3, marginLeft: 5, width: 310 }}
        >
          <AccountCircleOutlinedIcon
            style={{ fontSize: 150, marginLeft: 70, marginTop: 50 }}
          />
          <div style={{ marginLeft: 110 }}>
            <Typography>{name}</Typography>
          </div>
          <div style={{ marginLeft: 70, marginTop: 10 }}>
            <Typography>Visited locations: {numVisited}</Typography>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper
          elevation={10}
          sx={{ height: 300, marginTop: 3, marginRight: 5 }}
        >
          <h3>other information here</h3>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ backgroundColor: "pink" }}>
          <h3>Map here</h3>
        </Paper>
        <Map onMarkerClick={onMarkerClick} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ backgroundColor: "green" }}>
          <h3>Location Details</h3>
          <LocationInfo
            name={locInfo.name}
            address={locInfo.address}
            description={locInfo.description}
          />
          {locInfo.name != "" ? (
            <button type="button" onClick={incrementVisited}>
              I visited here!
            </button>
          ) : (
            <div />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}
