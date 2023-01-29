import { Grid, Paper, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Map from "./map";

export default function Main() {
  const { state } = useLocation();
  const { _id, name, visited } = state;

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
            <Typography>Visited locations: {visited}</Typography>
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
        <Map />
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ backgroundColor: "green" }}>
          <h3>other information here</h3>
        </Paper>
      </Grid>
    </Grid>
  );
}
