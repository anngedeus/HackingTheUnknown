import {
    Grid,
    Paper,
    Typography,
} from "@mui/material"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React, {useState, useEffect} from 'react'
import Map from "./map";

export default function Main() {

    return (
        <Grid container spacing={2}>
           <Grid item xs={12} md={4}>
                <Paper elevation={10} sx={{height: 300, marginTop: 3, marginLeft: 5, width: 310}}>
                    <AccountCircleOutlinedIcon style={{fontSize: 150, marginLeft: 70, marginTop: 50}}/>
                    <div style={{marginLeft: 110}}>
                        <Typography>User Name</Typography>
                    </div>
                    <div style={{marginLeft: 70, marginTop: 10}}>
                        <Typography>User score (something)</Typography>
                    </div>  
                </Paper>
           </Grid>
           <Grid item xs={12} md={8}>
            </Grid>
           <Grid item xs={12} md={8}>
                <div>
                    <Map/>
                </div>
           </Grid>
           <Grid item xs={12} md={4}>
                <Paper elevation={10} sx={{backgroundColor: "pink", width: 460, height: 460, marginLeft: -2.5, marginTop: -2}}>
                </Paper>
           </Grid>
        </Grid>
    )
}
