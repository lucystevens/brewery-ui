import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import Beer from '../../../../models/Beer';
import { useHistory } from 'react-router-dom';

export interface BeerDetailsCardProps {
    beer: Beer;
}

const BeerDetailsCard: React.FC<BeerDetailsCardProps> = ({ beer }) => {

  const history = useHistory();

  const handleOnClick = () => {
      history.push(`/beers/${beer.slug}`)
  }

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
              {beer.abv}% {beer.style}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleOnClick}>
            More info
          </Button>
          {beer.available && 
            <Button size="small" color="primary">
              Add to cart
            </Button>
          }
        </CardActions>
      </Card>
    );

};

export default BeerDetailsCard;