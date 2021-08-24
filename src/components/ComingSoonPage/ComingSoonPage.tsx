import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react'
import './ComingSoonPage.scss'


const ComingSoonPage: React.FC = () => {

    return (
        <Grid container style={{padding:"1rem"}}>
            <Grid item xs={12} className={"center"}>
                <Typography variant={"h1"} className={"coming-soon"}>Coming soon!</Typography>
            </Grid>
            <Grid item xs={12} className={"center"}>
                <img alt="Coming soon image" src="/images/beer-toast.gif"/>
            </Grid>
        </Grid> 
    );

};

export default ComingSoonPage;