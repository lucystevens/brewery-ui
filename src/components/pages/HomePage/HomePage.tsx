import { Box, Button, Container, Fade, Typography } from '@material-ui/core';
import React, { ReactNode, useEffect, useState } from 'react'
import { setInterval } from 'timers';
import './HomePage.scss'


const HomePage: React.FC = () => {

    const [contentIndex, setContentIndex] = useState(1)

    const landingPage = () => {
        return (
            <Box className="homepage-container v-center h-center">
                <Box className="homepage-box align-center">
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
            </Box>
        )
    }

    const newReleases = () => {
        return (
            <Box className="homepage-container v-bottom h-right">
                <Box className="homepage-box align-right">
                    <Typography className="title" variant={"h1"}>
                        New Arrivals
                    </Typography>
                    <Typography className="subtitle" variant={"h2"}>
                        Lost in the Sauce and Mieter*innen
                    </Typography>
                    <Button className="shop" variant="contained" color="primary">
                        Shop latest releases
                    </Button>
                </Box>
            </Box>
        )
    }

    const content: Content[] = [
        {
            background: "images/backgrounds/brewery-bg-col.jpg",
            content: landingPage
        },{
            background: "images/backgrounds/can-bg-col.jpg",
            content: newReleases
        }
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setContentIndex((contentIndex+1)%content.length)
        }, 5000);
      
        return () => clearInterval(intervalId);
      }, []);
    

    const currentContent = () => content[contentIndex]

    return (
        <div className="background" style={{backgroundImage: `url(${currentContent().background})`}}>
            <div className="mask">
                { currentContent().content() }
            </div>
        </div>
    );

};

export interface Content {
    background: string,
    content: () => ReactNode
}

export default HomePage;