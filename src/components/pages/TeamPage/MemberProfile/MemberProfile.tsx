import { Card, CardActionArea, CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'
import './MemberProfile.scss'

interface MemberProfileProps {
    name: string
    pronouns: string
    role: string
    imageSrc: string
    invert?: boolean
}

const MemberProfile: React.FC<MemberProfileProps> = 
    ({ name, pronouns, role, imageSrc, invert, children }) => {

        const imageCard = () =>                 
            <Card className={"image-card"}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={name}
                        image={imageSrc}
                        title={name}/>
                </CardActionArea>
            </Card>

        const content = () =>
            <div className="content">
                <Typography variant="h4">
                    { name } { pronouns }
                </Typography>
                <Typography color="textSecondary" variant="h5" gutterBottom>
                    {role}
                </Typography>
                { children }
            </div>

    if(invert) {
        return (<>
            <Grid item md={3} xs={12} className="image-card mobile">
                {imageCard()}
            </Grid>
            <Grid item md={9} xs={12}>
                { content() }
            </Grid>
            <Grid item md={3} xs={12} className="image-card desktop">
                {imageCard()}
            </Grid>
        </>)
    }
    else {
        return (<>
            <Grid item md={3} xs={12}>
                {imageCard()}
            </Grid>
            <Grid item md={9} xs={12}>
                { content() }
            </Grid>
        </>)
    }

}

export default MemberProfile