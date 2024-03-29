import { Box, Button, Typography } from '@material-ui/core';
import MailingListSignup from 'components/MailingListSignup/MailingListSignup';
import React, { ReactNode, useMemo } from 'react'
import Carousel from 'react-material-ui-carousel';
import './HomePage.scss'

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {

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
                        bucket, to some proper kit and a dedicated bedroom but
                        our mission stays the same:
                    </Typography>
                    <Typography className="motto" variant={"h3"}>
                        Drink good beer, with good people.
                    </Typography>
                </Box>
            </Box>
        )
    }

    // eslint-disable-next-line
    const newReleases = () => {
        return (
            <Box className="homepage-container v-bottom h-right">
                <Box className="homepage-box align-right">
                    <Typography className="title" variant={"h1"}>
                        New Arrivals
                    </Typography>
                    <Typography className="subtitle" variant={"h2"}>
                        Beyond the Pale
                    </Typography>
                    <Button className="shop" 
                        variant="contained" 
                        color="primary" 
                        href="/retailers">
                        Where to buy
                    </Button>
                </Box>
            </Box>
        )
    }

    const merchDrop = () => {
        return (
            <Box className="homepage-container v-bottom h-right">
                <Box className="homepage-box align-right">
                    <Typography className="title" variant={"h1"}>
                        Merch
                    </Typography>
                    <Typography className="subtitle" variant={"h2"}>
                        T-shirts available now!
                    </Typography>
                    <Button className="shop" 
                        variant="contained" 
                        color="primary" 
                        href="https://shop.closetbrewingproject.co.uk"
                        target="_blank">
                        Shop merch
                    </Button>
                </Box>
            </Box>
        )
    }

    const content: Content[] = useMemo(() => [
        {
            key: "default",
            background: "images/backgrounds/brewery-bg-col.jpg",
            render: landingPage
        },{
            key: "merch-drop",
            background: "images/backgrounds/t-shirt-bg.jpg",
            render: merchDrop
        },
    ], [])

    const generateContent = (content: Content): ReactNode => 
    <div key={content.key} className="background" style={{backgroundImage: `url(${content.background})`}}>
        <div className="mask">
            { content.render() }
        </div>
    </div>
    
    return (
        <> <Carousel autoPlay={false} indicators={false} navButtonsProps={{className:"nav-btn", style:{}}}>
                { content.map(generateContent) }
            </Carousel>
            <MailingListSignup />
        </>);

};

export interface Content {
    key: string,
    background: string,
    render: () => ReactNode
}

export default HomePage;