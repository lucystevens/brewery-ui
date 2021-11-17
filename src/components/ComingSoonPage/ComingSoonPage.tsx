import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import './ComingSoonPage.scss'


const ComingSoonPage: React.FC = () => {

    return (
        <Grid container style={{padding:"1rem", marginTop: "10vh"}}>
            <Grid item xs={12} className={"center"}>
                <Typography variant={"h1"} className={"coming-soon"}>Coming soon!</Typography>
            </Grid>
            <Grid item xs={12} className={"center"}>
                <img className={"beer-toast"} alt="Two beers toasting" src="/images/beer-toast.gif"/>
            </Grid>
        </Grid> 
    );

};

export default ComingSoonPage;