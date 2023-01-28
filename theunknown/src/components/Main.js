import {
    Grid,
    Paper,
} from "@mui/material"
import React, {useState, useEffect} from 'react'

export default function Main() {

    return (
        <Grid container spacing={2}>
           <Grid item xs={12} md={8}>
                <Paper sx={{backgroundColor: "grey"}}>
                    <h3>User Information in this grid with profile picture</h3>
                </Paper>
           </Grid>
           <Grid item xs={12} md={4}>
                <Paper sx={{backgroundColor: "yellow"}}>
                    <h3>other information here</h3>
                </Paper>
            </Grid>
           <Grid item xs={12} md={8}>
                <Paper sx={{backgroundColor: "pink"}}>
                    <h3>Map here</h3>
                </Paper>
           </Grid>
           <Grid item xs={12} md={4}>
                <Paper sx={{backgroundColor: "green"}}>
                    <h3>other information here</h3>
                </Paper>
           </Grid>
        </Grid>
    )
}