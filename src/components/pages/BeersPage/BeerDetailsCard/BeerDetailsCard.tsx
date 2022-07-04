import React, { useState } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import Beer from '../../../../models/Beer';
import './BeerDetailsCard.scss';

export interface BeerDetailsCardProps {
    beer: Beer;
}

const BeerDetailsCard: React.FC<BeerDetailsCardProps> = ({ beer }) => {

    const [cardFlipped, setCardFlipped] = useState(false)

    const style = {
      backgroundImage: `url('${beer.iconUrl}')`,
      color: beer.textColour,
      textShadow: `2px 2px ${beer.textColour === 'black'? 'white' : 'black'}`
    }

    return (
      cardFlipped?
      <Box className="beer-card flipped" onClick={() => setCardFlipped(false)}>
        <div className="content">
          <Typography 
            variant={"h4"} 
            className="name">
              { beer.name }
          </Typography>
          <Typography 
            variant={"body1"} 
            className="description">
              { beer.description }
          </Typography>
        </div>
      </Box> :

      <Box 
          className="beer-card"
          onClick={() => setCardFlipped(true)} 
          style={style}>
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