import { Container, Grid, Typography } from '@material-ui/core';
import { Category } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';
import { BeerCategory } from 'models/Beer';
import React, { useState } from 'react'
import { setupBeerServiceMock } from 'services/BeerService/MockBeerService';
import { useBeers } from '../../../hooks/ApiHook';
import BeerDetailsCard from './BeerDetailsCard/BeerDetailsCard';
import "./BeerPage.scss"

const BeersPage: React.FC = () => {

    const [selectedTab, selectTab] = useState<BeerCategory>(BeerCategory.CORE)

    const categories = [
        { type: BeerCategory.CORE, name: "The Regulars"},
        { type: BeerCategory.SEASONAL, name: "Old Pals"},
        { type: BeerCategory.ARCHIVE, name: "Gone but not forgotten"}
    ]

    setupBeerServiceMock()
    const { beers, error, isLoading } = useBeers()

    return (
        <Container>
            <div className="header">
                <Typography className="title" variant={"h3"}>
                    Our Beers
                </Typography>
                <Typography className="menu" variant={"h5"}>
                    { categories.map((category, index) =>
                        <>
                            { index > 0 && <span> | </span> }
                            <span 
                                className={category.type === selectedTab? "selected" : ""} 
                                onClick={() => selectTab(category.type)}>
                                { category.name }
                            </span>
                        </>
                    )}
                </Typography>
            </div>
            <Grid container style={{padding:"1rem"}} spacing={4}>
                { 
                    isLoading? <Skeleton variant="text" /> :
                        beers? beers.map(b => 
                            b.category === selectedTab && 
                            <Grid key={b.slug} item md={3} xs={6}>
                                <BeerDetailsCard beer={b} />
                            </Grid>
                        ) :
                        error? <p >{ error.title }</p> :
                        <p>Something went wrong</p>
                }
            </Grid>
        </Container> 
    );

};

export default BeersPage;