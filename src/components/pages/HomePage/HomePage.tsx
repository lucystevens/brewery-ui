import { Box, Container, Typography } from '@material-ui/core';
import React from 'react'
import './HomePage.scss'


const HomePage: React.FC = () => {

    return (
        <Container>
            <Box className="homepage-box">
                <Typography className="title" variant={"h1"}>
                    This is Closet Brewing Project
                </Typography>
                <Typography className="subtitle" variant={"h2"}>
                    Edinburgh's Smallest Brewery*
                </Typography>
                <Typography className="intro" variant={"h4"}>
                    We established Closet Brewing Project in 2018 with
                    nothing but a cupboard, a bucket and dreams of brewing
                    a quality beer that even the most ale-averse drinker
                    could enjoy as much as a beer connoisseur.
                    Since then we've grown out of the cupboard and the
                    bucket, to some proper kit and a spare bedroom but
                    our mission stays the same:
                </Typography>
                <Typography className="motto" variant={"h3"}>
                    Drink good beer, with good people.
                </Typography>
            </Box>
        </Container>
    );

};

export default HomePage;