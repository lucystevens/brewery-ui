import { Container, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { BeerCategory } from 'models/Beer';
import React, { useState } from 'react'
import { useBeers } from '../../../hooks/ApiHook';
import BeerDetailsCard from './BeerDetailsCard/BeerDetailsCard';
import "./BeerPage.scss"

const BeersPage: React.FC = () => {

    const [selectedTab, selectTab] = useState<BeerCategory>(BeerCategory.CORE)

    const categories = [
        { 
            type: BeerCategory.CORE,
            name: "The Regulars",
            subtitle: "Our core range - always there for you."
        },
        { 
            type: BeerCategory.SEASONAL,
            name: "Old Pals",
            subtitle: "They might come and go but you have great fun together."
        },
        { 
            type: BeerCategory.ARCHIVE, 
            name: "Gone but not forgotten",
            subtitle: "Beers from the past. No longer brewed but always in our hearts."
        }
    ]

    const { beers, error, isLoading } = useBeers()

    return (
        <Container className="beer-page">
            <div className="header">
                <Typography className="page-title" variant={"h2"}>
                    Our Beers
                </Typography>
                <Typography className="menu" variant={"h5"}>
                    { categories.map((category, index) =>
                        <React.Fragment key={category.name}>
                            { index > 0 && <span> | </span> }
                            <span key={category.name}
                                className={category.type === selectedTab? "selected" : ""} 
                                onClick={() => selectTab(category.type)}>
                                { category.name }
                            </span>
                        </React.Fragment>
                    )}
                </Typography>
            </div>
            <Typography className="subtitle" variant={"h6"}>
                <i>{ categories.find( cat => cat.type === selectedTab )?.subtitle }</i>
            </Typography>
            <Grid container style={{padding:"1rem"}} spacing={4}>
                { 
                    isLoading? <Skeleton variant="text" /> :
                        beers? beers.map(b => 
                            b.category === selectedTab && 
                            <Grid key={b.slug} item md={3} sm={6} xs={12}>
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