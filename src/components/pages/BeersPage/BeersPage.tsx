import { Grid } from '@material-ui/core';
import React, { useCallback } from 'react'
import { useAccessCode, useService } from '../../../hooks/ApiHook';
import BeerService from '../../../services/BeerService';
import { setupBeerServiceMock } from '../../../services/BeerService/MockBeerService';
import BeerDetailsCard from './BeerDetailsCard/BeerDetailsCard';

const BeersPage: React.FC = () => {

    let code = useAccessCode()

    const makeRequest = useCallback(() => {
        setupBeerServiceMock();
        return new BeerService().getBeers(code);
    }, [code]);

    const handleError = useCallback((error) => {
        console.error(error)
    }, []);

    const [{ data, isLoading }] = useService(makeRequest, handleError);

    return (
        <Grid container style={{padding:"1rem"}}>
            <Grid item xs={3} className="filter"></Grid>
            <Grid item xs={9} className="beers">
                <Grid container spacing={2} justify="center">
                {!isLoading && data && 
                    data.map(beer => 
                        <Grid item xs={6} sm={4} md={3} key={beer.slug}>
                            <BeerDetailsCard beer={beer} key={beer.slug}></BeerDetailsCard>
                        </Grid>
                    )}
                </Grid>
            </Grid>
      </Grid>  
    );

};

export default BeersPage;