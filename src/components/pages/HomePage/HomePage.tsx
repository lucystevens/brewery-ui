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
                    Established in 2018, in a small closet in a Leith flat, our mission has always been quality over quantity. 
                </Typography>
            </Box>
        </Container>
    );

};

export default HomePage;