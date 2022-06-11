import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
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
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { name } { pronouns }
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="p">
                            {role}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        const content = () =>
            <div className="content">
                { children }
            </div>

    if(invert) {
        return (<>
            <Grid item xs={9}>
                { content() }
            </Grid>
            <Grid item xs={3}>
                {imageCard()}
            </Grid>
        </>)
    }
    else {
        return (<>
            <Grid item xs={3}>
                {imageCard()}
            </Grid>
            <Grid item xs={9}>
                { content() }
            </Grid>
        </>)
    }

}

export default MemberProfile