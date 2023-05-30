import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react'
import './EventsPage.scss'
import BreweryEvent from "../../../models/BreweryEvent";

const EventsPage: React.FC = () => {

    const colours = ["#b37486", "#7c98a6", "#d67d53", "#5b9877", "#e7a29c", "#534d6b", "#e6bd57"]
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const events: BreweryEvent[] = [
        {
            id: 1,
            title: "Beer Tasting",
            description: "Try some of our beers, including a couple of special surprises!",
            location: "Leith Bottle Shop",
            mapsUrl: "",
            date: new Date(2023,6,8),
            time: "6pm"
        },
        {
            id: 2,
            title: "Pride Bridge Cleanup",
            description: "Help clean up the iconic pride bridge, then cool off with our Dreadnought exclusive Lavender pale ale; Gal Pals!",
            location: "Dreadnought",
            mapsUrl: "",
            date: new Date(2023,6,11),
            time: "2pm"
        },
        {
            id: 3,
            title: "Tap Takeover",
            description: "Launching Hivemind, a Black IPA brewed with The Beerhive, and sharing some old favourites.",
            location: "Stockbridge Tap",
            mapsUrl: "",
            date: new Date(2023,6,15),
            time: "7pm"
        },
        {
            id: 4,
            title: "1st Birthday Party",
            description: "We are turning 1! Treat yourself to exclusive beers on tap, including a Moonwake collab!",
            location: "Moonwake Taproom",
            mapsUrl: "",
            date: new Date(2023,7,15),
            time: "TBC"
        }
    ]

    return (
        <Container className="events-page">
            <Typography className="page-title" variant={"h2"}>
                Upcoming events
            </Typography>
            <Typography className="page-description" variant={"body1"}>
                We're out and about! Come say hi and try our beer at one of these events.
            </Typography>
            <Grid container className="events" spacing={2} alignItems={"center"} justifyContent={"center"}>
                { events.map((ev: BreweryEvent, index: number) =>
                    <Grid key={ev.id} item xs={10} className="event" style={{backgroundColor: colours[index%colours.length]}}>
                        <div className="event-content">
                            <div className="event-details">
                            <Typography className="title" variant="h3">{ev.title}</Typography>
                            <Typography variant="h5">{ev.location} | {ev.time}</Typography>
                            <Typography className="description" variant="body1">{ev.description}</Typography>
                            </div>
                            <div className="event-date">
                                <Typography className="month" variant="h2">{monthNames[ev.date.getMonth()-1]}</Typography>
                                <Typography className="day" variant="h2">{`${ev.date.getDate()}`.padStart(2, "0")}</Typography>
                            </div>
                        </div>

                    </Grid>
                )}
            </Grid>
        </Container>
    );

};

export default EventsPage;