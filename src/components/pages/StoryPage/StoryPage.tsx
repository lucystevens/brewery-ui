import { Card, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react'
import './StoryPage.scss'

const StoryPage: React.FC = () => {

    return (
        <Container className="story-page">
            <Typography className="page-title" variant={"h2"}>
                Our Story
            </Typography>
            <Grid container className="our-story" spacing={2}>

                <Grid item md={9} sm={12} className="content">
                    <Typography variant="h3" gutterBottom>
                        Who we are
                    </Typography>
                    <Typography variant="body1">
                        <b>Closet Brewing Project</b> is a passion project, owned and run by two queer women, 
                        and <i>almost certainly</i> the smallest brewery in Edinburgh. We believe 
                        there is a beer out there for everyone, and make it our mission to brew a 
                        diverse range of styles from silly sours to hazy hopbombs and potent porters. 
                    </Typography>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={"image-card"}>
                        <CardMedia
                            component="img"
                            alt={"Kegging beer in the current brewery"}
                            image={"/images/brewery/brewery-1.jpg"}/>
                    </Card>
                </Grid>

                <Grid item xs={12} className="separator"></Grid>

                <Grid item md={3} sm={12}>
                    <Card className="image-card desktop">
                        <CardMedia
                            component="img"
                            alt={"Cooling wort in a small bathtub"}
                            image={"/images/brewery/throwback-1.jpg"}/>
                    </Card>
                </Grid>
                <Grid item md={9} sm={12} className="content">
                    <Typography variant="h3" gutterBottom>
                        Where it began
                    </Typography>
                    <Typography variant="body1">
                        Started by our founder and head brewer, Lucy, as a home brewing hobby in her 
                        first flat in Leith in 2018, the name comes from the small closet those first 
                        batches of beer were kept in. Since then, we've grown from strength to strength, 
                        with Lucy's wife Lizzie joining forces shortly after as the resident wordsmith and 
                        marketing expert. In 2022 we took the most exciting step yet as a brewery; being 
                        granted a licence to brew commercially, and share our beer with the public for the first time. 
                    </Typography>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className="image-card mobile">
                        <CardMedia
                            component="img"
                            alt={"Cooling wort in a small bathtub"}
                            image={"/images/brewery/throwback-1.jpg"}/>
                    </Card>
                </Grid>

                <Grid item xs={12} className="separator"></Grid>

                <Grid item md={9} sm={12} className="content">
                    <Typography variant="h3" gutterBottom>
                        What's next
                    </Typography>
                    <Typography variant="body1">
                        Beer is a passion for us, and we want to continue creating small-scale beer and sharing
                        it with <b>you</b>. Not only that, but we also want to collaborate with other breweries who live
                        by the same mission as us; <b>Drink good beer, with good people</b>. So, if that sounds like you,
                        watch this space, and if you're a brewer who likes the sound of that then you know where to find us.
                    </Typography>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Card className={"image-card"}>
                        <CardMedia
                            component="img"
                            alt={"Closet Brewing Project sign on the brewery door"}
                            image={"/images/brewery/brewery-3.jpg"}/>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );

};

export default StoryPage;