import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import Beer from '../../../../models/Beer';
import './BeerDetailsCard.scss';

export interface BeerDetailsCardProps {
    beer: Beer;
}

const BeerDetailsCard: React.FC<BeerDetailsCardProps> = ({ beer }) => {


    return (
        <Box 
          className="beer-card" 
          style={{
            backgroundImage: `url('${beer.iconUrl}')`,
            color: beer.textColour,
            textShadow: `2px 2px ${beer.textColour === 'black'? 'white' : 'black'}`
            }}>
              <div className="content">
                <Typography 
                  variant={"h4"} 
                  className="name">
                    { beer.name }
                </Typography>
                <Typography 
                  variant={"h6"} 
                  className="style">
                    { beer.style } { beer.abv }%
                </Typography>
              </div>
        </Box>
    );

};

export default BeerDetailsCard;