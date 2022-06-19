import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import Beer from '../../../../models/Beer';
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
            image={beer.iconUrl}
            title={beer.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {beer.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {beer.abv}% {beer.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );

};

export default BeerDetailsCard;