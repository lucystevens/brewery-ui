import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react'
import MemberProfile from './MemberProfile/MemberProfile';
import './TeamPage.scss'

const TeamPage: React.FC = () => {

    return (
        <Container>
            <Typography className="title" variant={"h3"}>
                Meet the team
            </Typography>
            <Grid container className="team-box" spacing={2}>
                <MemberProfile 
                    name="Lucy Stevens"
                    pronouns="(she/her)"
                    role="Head Brewer"
                    imageSrc="/images/profiles/lucy.jpg">
                        <Typography variant="body1">
                            First up is our incomparable founder/ head brewer, Lucy! 
                            Lucy began brewing soon after she turned 18, on kit her 
                            friends had clubbed together to buy for her birthday 
                            which consisted of a plastic bucket, some liquid malt 
                            extract, yeast and a small plastic keg.
                        </Typography>
                        <Typography variant="body1">
                            Now with a much fancier set up, and almost a 
                            decade since her first brew, Lucy has tried her 
                            hand at a host of unusual styles, and even more 
                            unusual flavour combinations (who can forget the 
                            oak smoked cherry porter?!).
                        </Typography>
                        <Typography variant="body1">
                            Though she reckons that picking out a favourite Closet 
                            Brewing Project beer is akin to picking her favourite 
                            child, Lost in the Sauce takes her number one spot- a
                            juicy New England IPA that is back by popular demand 
                            after last spring's successful first release.
                        </Typography>
                        <Typography variant="body1">
                            "The CBP motto is Drink Good Beer With Good People, 
                            because having a drink is just as much about the people 
                            you share it with as it is about whatever you fill your 
                            glass with"
                        </Typography>
                </MemberProfile>
                <Grid item xs={12} className="separator"></Grid>
                <MemberProfile 
                    name="Lizzie Stevens"
                    pronouns="(she/her)"
                    role="Head of Comms"
                    imageSrc="/images/profiles/lizzie.jpg"
                    invert={true}>
                        <Typography variant="body1">
                            Our delightful second in command. Want to know who comes
                            up with the best beer puns, or writes the elaborate 
                            descriptions of our beers? She is your gal. She has 
                            been Lucy's partner in crime for almost ten years,
                            and the inspiration for many a brew as Lucy tries to 
                            find a beer Lizzie will actually enjoy.
                        </Typography>
                        <Typography variant="body1">
                            While she would be the first to say she isn't a big fan of 
                            drinking beer, she certainly loves to learn about it, which 
                            makes her a top team member (and we aren't just saying that 
                            because she is the one writing this post... honest!)
                        </Typography>
                        <Typography variant="body1">
                            Her favourite Closet Brewing Project beer is Let's Get Married, 
                            a raspberry and strawberry Berliner Weisse that she and Lucy 
                            brewed together for their wedding in 2021- they even shared 
                            a bottle during the ceremony.
                        </Typography>
                </MemberProfile>
            </Grid>
        </Container>
    );

};

export default TeamPage;