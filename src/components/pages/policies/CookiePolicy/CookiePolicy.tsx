import { Container, Grid, List, ListItem, Typography } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import React, { useState } from 'react'
import { getCookiePrefs, setCookiePrefs } from 'services/CookieService/CookieService';
import './CookiePolicy.scss'

const CookiePolicy: React.FC = () => {

    const [analyticsCookiesAllowed, setAnalyticsCookiesAllowed] = useState(
        getCookiePrefs().analyticsAllowed? "true" : "false"
    )

    const toggleCookiePrefs = (value: string) => {
        setAnalyticsCookiesAllowed(value)
        setCookiePrefs({ analyticsAllowed: value === "true" })
    }

    return (
        <Container className="cookie-policy">
            <Typography className="page-title" variant={"h2"}>
                Cookie Policy
            </Typography>
            <Typography variant="h3" gutterBottom>
                What are cookies?
            </Typography>
            <Typography variant="body1" className="padding-bottom">
                Cookies are small text files that websites place on 
                your device as you are browsing. They are processed 
                and stored by your web browser. In and of themselves, 
                cookies are harmless and serve crucial functions for 
                websites. Cookies can also generally be easily viewed and deleted.
            </Typography>
            <Typography variant="h3" gutterBottom>
                How we use cookies
            </Typography>
            <Typography variant="body1" className="padding-bottom">
                We use cookies for a few things at Closet Brewing Project,
                but don't worry; we will <b>never</b> track any personal information
                about you, or pass your data onto third-parties. Any cookies we store
                are either for essential website function, or to help us make sure your
                user experience is as good as it can be. You can find more 
                information on the cookies we use below:
            </Typography>
            <List className="padding-bottom">
                <ListItem>
                    <Typography variant="h5">ageVerified</Typography>
                    <Typography variant="body1" className="cookie-desc">
                        <i>(necessary)</i> - This is used to determine if the age
                        verification pop-up has been shown to you. We need to save this,
                        or you'd never be allowed into the sight!
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h5">cbpCookiePrefs</Typography>
                    <Typography variant="body1" className="cookie-desc">
                        <i>(necessary)</i> - This is used to save your cookie preferences
                        set below. Pretty meta huh?
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h5">cbpUserId</Typography>
                    <Typography variant="body1" className="cookie-desc">
                        <i>(analytics)</i> - This is a uniquely generated
                        id used for analysing return visits to the site. It does
                        not contain any information about you and is purely random.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="h5">cbpSessionId</Typography>
                    <Typography variant="body1" className="cookie-desc">
                        <i>(analytics)</i> - This is a uniquely generated
                        id used for analytics across the site. It does
                        not contain any information about you and is purely random.
                    </Typography>
                </ListItem>
            </List>
            <Typography variant="h3" gutterBottom>
                Your cookie preferences
            </Typography>
            <Grid container className="cookie-prefs padding-bottom">
                <Grid item md={4} xs={12}>
                    <Typography variant="h5" gutterBottom>Necessary cookies</Typography>
                    <ToggleButtonGroup
                        title="You can't disable necessary cookies"
                        color="primary"
                        value={"true"}
                        exclusive>
                        <ToggleButton disabled value="true">ON</ToggleButton>
                        <ToggleButton disabled value="false">OFF</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Typography variant="h5" gutterBottom>Analytics cookies</Typography>
                    <ToggleButtonGroup
                        color="primary"
                        value={analyticsCookiesAllowed}
                        exclusive
                        onChange={(_, value) => toggleCookiePrefs(value)}>
                        <ToggleButton value="true">ON</ToggleButton>
                        <ToggleButton value="false">OFF</ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
        </Container>
    );

};

export default CookiePolicy;