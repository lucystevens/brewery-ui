import { Container, Grid, Typography } from '@material-ui/core';
import { beers } from 'data/Beers';
import React from 'react'
import BeerDetailsCard from './BeerDetailsCard/BeerDetailsCard';
import "./BeerPage.scss"

const BeersPage: React.FC = () => {

    // const { beers, error, isLoading } = useBeers()

    return (
        <Container className="beer-page">
            <div className="header">
                <Typography className="page-title" variant={"h2"}>
                    Our Beers
                </Typography>
            </div>
            <Typography className="subtitle" variant={"h6"}>
                <i>The full range</i>
            </Typography>
            <Grid container style={{padding:"1rem"}} spacing={4}>
                { 
                    beers.filter(b => !b.hidden).map(b => 
                        <Grid key={b.name} item md={3} sm={6} xs={12}>
                            <BeerDetailsCard beer={b} />
                        </Grid>
                    )
                }
            </Grid>
        </Container> 
    );

};

export default BeersPage;