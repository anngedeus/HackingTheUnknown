import { Grid, Paper, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Map from "./map";
import LocationInfo from "./LocationInfo";
import "../styles/main.css";

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
        <Paper elevation={10} sx={{ height: 100, marginTop: 0, width: 2000 }}>
          <h1>DISCOVERING GAINESVILLE</h1>
        </Paper>
        <Paper
          elevation={10}
          sx={{ height: 100, marginTop: 3, marginLeft: 5, width: 1825 }}
        >
          <AccountCircleOutlinedIcon
            style={{ fontSize: 50, marginLeft: 20, marginTop: 20 }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper
          elevation={0}
          sx={{
            height: 30,
            marginTop: 20,
            marginLeft: -63,
            marginTop: 24,
            width: 1000,
          }}
        >
          <h3>
            Welcome {name}! You have visited {numVisited} locations!{" "}
          </h3>
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}></Grid>
      <Grid item xs={10} md={8}>
        <div>
          <Map onMarkerClick={onMarkerClick} />
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper
          elevation={10}
          sx={{
            backgroundColor: "white",
            width: 628,
            height: 550,
            marginLeft: -6,
            marginTop: -5,
          }}
        >
          <h4>Location Details</h4>
          <LocationInfo
            name={locInfo.name}
            address={locInfo.address}
            description={locInfo.description}
          />
          {locInfo.name != "" ? (
            <button id="visitButton" type="button" onClick={incrementVisited}>
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
