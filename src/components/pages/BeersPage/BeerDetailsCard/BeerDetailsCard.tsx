import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import Beer from '../../../../models/Beer';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import './BeerDetailsCard.scss';

export interface BeerDetailsCardProps {
    beer: Beer;
}

const BeerDetailsCard: React.FC<BeerDetailsCardProps> = ({ beer }) => {


    return (
        <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={beer.logoUrl}
            title={beer.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {beer.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {beer.abv}% {beer.description}
            </Typography>
            <Stack className="tags" direction="row" spacing={1}>
              {beer.tags.map(tag => 
                <Chip label={tag} color="info" />
              )}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    );

};

export default BeerDetailsCard;