import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react'
import { setupBeerServiceMock } from 'services/BeerService/MockBeerService';
import { useBeers } from '../../../hooks/ApiHook';

const BeersPage: React.FC = () => {

    setupBeerServiceMock()
    const { beers, error, isLoading } = useBeers()

    return (
        <Grid container style={{padding:"1rem"}}>
            { 
                isLoading? <Skeleton variant="text" /> :
                    beers? beers.map(b => <p>{ b.name }</p>) :
                    error? <p >{ error.title }</p> :
                    <p>Something went wrong</p>
            }
      </Grid>  
    );

};

export default BeersPage;