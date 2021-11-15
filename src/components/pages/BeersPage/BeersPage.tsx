import { Grid } from '@material-ui/core';
import { FilterSharp } from '@material-ui/icons';
import React, { useCallback, useEffect, useState } from 'react'
import { useAccessCode, useService } from '../../../hooks/ApiHook';
import Beer from '../../../models/Beer';
import BeerService from '../../../services/BeerService';
import BeerDetailsCard from './BeerDetailsCard/BeerDetailsCard';
import BeerFilter from './BeerFilter/BeerFilter';

const BeersPage: React.FC = () => {

    let code = useAccessCode()

    const makeRequest = useCallback(() => {
        return new BeerService().getBeers();
    }, [code]);

    const handleError = useCallback((error) => {
        console.error(error)
    }, []);

    const [{ data, isLoading }] = useService(makeRequest, handleError);

    const [filteredData, setFilteredData] = useState<Beer[]>()

    useEffect(() => {
        setFilteredData(data)
    }, [data]);

    const onFilterChange = useCallback((filters: ((beer: Beer) => boolean)[]) => {
        setFilteredData(data?.filter(beer => 
            filters.filter(filter => !filter(beer)).length == 0
        ))
    }, [data]);

    return (
        <Grid container style={{padding:"1rem"}}>
            <Grid item xs={3} className="filter">
                {!isLoading && data && 
                    <BeerFilter beers={data} onFilterChange={onFilterChange}/>
                }
            </Grid>
            <Grid item xs={9} className="beers">
                <Grid container spacing={2} justify="center">
                {!isLoading && filteredData && 
                    filteredData.map(beer => 
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