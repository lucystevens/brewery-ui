import React from 'react'
import { Box, Container, Divider, Grid, Typography } from '@material-ui/core';
import './RetailerPage.scss';
import Retailer from 'models/Retailer';
import { Skeleton } from '@mui/material';
import RetailerDetail from './RetailerDetail/RetailerDetail';
import ErrorResponse from 'models/ErrorResponse';
import { distinct } from 'utils/ArrayUtils';

const RetailerPage: React.FC = () => {

    // TODO replace with API call
    const retailers: Retailer[] = [
        {
            id: 1,
            name: "Cornelius Easter Road",
            address: "18-20 Easter Road",
            area: "Edinburgh",
            iconUrl: "/images/retailers/cornelius.png",
            links: [
                {type: "instagram", url: "corneliusbeers"},
                {type: "maps", url: "6x9bms3CVcTLp4nv9"},
                {type: "website", url: "https://corneliusbeers.com/"}
            ]
        },
        {
            id: 2,
            name: "The Beerhive",
            address: "24 Rodney Street",
            area: "Edinburgh",
            iconUrl: "/images/retailers/beerhive.jpg",
            links: [
                {type: "instagram", url: "thebeer_hive"},
                {type: "maps", url: "NwzFUrn3nTbnWUGP6"}
            ]
        },
        {
            id: 3,
            name: "Cornelius Leith Walk",
            address: "128 Leith Walk",
            area: "Edinburgh",
            iconUrl: "/images/retailers/cornelius.png",
            links: [
                {type: "instagram", url: "corneliusbeers"},
                {type: "maps", url: "davDyqEcB8iaYDzK9"},
                {type: "website", url: "https://corneliusbeers.com/"}
            ]
        },
        {
            id: 4,
            name: "Leith Bottle Shop",
            address: "30 Great Junction Street",
            area: "Edinburgh",
            iconUrl: "/images/retailers/leith-bottleshop.webp",
            links: [
                {type: "instagram", url: "leithbottleshop"},
                {type: "maps", url: "Qe6ieYK1tCKXEqTk6"},
                {type: "website", url: "https://leithbottleshop.co.uk/"}
            ]
        },
        {
            id: 5,
            name: "The Beer Emporium",
            address: "8 Welles Street, Sandbach",
            area: "England",
            iconUrl: "/images/retailers/beer-emporium.png",
            links: [
                {type: "instagram", url: "yourbeeremporium"},
                {type: "maps", url: "Mg2cQmtDnRAKRiFTA"},
                {type: "website", url: "http://thebeeremporium.com"}
            ]
        }
    ]
    const isLoading = false
    let error: ErrorResponse | undefined

    const areas = distinct(retailers.map(r => r.area))

    return (
        <Container className="retailers-page" maxWidth={"md"}>
            <Typography className="page-title" variant={"h2"}>
                Retailers
            </Typography>
            <Typography className="page-description" variant={"body1"}>
                Want to get your hands on our cans? They can be purchased from 
                fantastic bottle shops all around Edinburgh 
                (and a few special spots elsewhere in the UK). 
            </Typography>
            <Typography className="page-description" variant={"body1"}>
                Fancy seeing your name on this prestiguous list of excellent bottle shops?&nbsp;
                <a target="_blank" rel="noreferrer" href="https://us9.list-manage.com/contact-form?u=d8d22d02a5013739b8376d3f0&form_id=4743b5beebdda103bc1accd791577b03">Drop us a message!</a>
            </Typography>
            { areas.map(area => 
                <Box key={area} className="retailers-by-area">
                    <Typography className="area-title" variant={"h3"}>
                        {area}
                    </Typography>
                    <Divider/>
                    <Grid className="retailers-container" container spacing={4}>
                        { 
                            isLoading? <Skeleton variant="text" /> :
                                retailers? retailers.filter(r => r.area === area)
                                    .map(r => 
                                    <Grid key={r.id} item md={6} xs={12}>
                                        <RetailerDetail retailer={r} />
                                    </Grid>
                                ) :
                                error? <p >{ error.title }</p> :
                                <p>Something went wrong</p>
                        }
                    </Grid>
                </Box>
            )}
            <Box key={"online"} className="retailers-by-area">
                <Typography className="area-title" variant={"h3"}>
                    Online
                </Typography>
                <Divider/>
                <Box className="retailers-container">
                    <Typography className="page-description" variant={"body1"}>
                    We are working hard to make our beers available online again as soon as possible.
                    In the meantime, why not check out our <a target="_blank" rel="noreferrer" href="https://shop.closetbrewingproject.co.uk/">online merch store?</a>
                    </Typography>
                </Box>
            </Box>

        </Container>
    )

}

export default RetailerPage;