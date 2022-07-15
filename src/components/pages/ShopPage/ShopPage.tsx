import React from 'react'
import { Card, CardMedia, Container, Typography } from '@material-ui/core';
import './ShopPage.scss';

const ShopPage: React.FC = () => {

    return (
        <Container className="shop-page" maxWidth={"md"}>
            <Typography className="page-title" variant={"h2"}>
                Shop Coming Soon!
            </Typography>
            <Typography className="description" variant={"h5"}>
                We're currently hard at work brewing beers for you! 
                Our first two beers, Lost in the Sauce and Mieter*innen,
                will launch on <b>21st August</b>. See you then!
            </Typography>
            <Card className={"image-card"}>
                <CardMedia
                    component="img"
                    alt={"Two beer cans in the brewery"}
                    image={"/images/brewery/cans-1.jpg"}
                    title={"Two beer cans in the brewery"}/>
            </Card>
        </Container>
    )

}

export default ShopPage;