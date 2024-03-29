import React, { useState } from 'react'
import { Box, Typography } from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';
import Beer from '../../../../models/Beer';
import './BeerDetailsCard.scss';

export interface BeerDetailsCardProps {
    beer: Beer;
}

const BeerDetailsCard: React.FC<BeerDetailsCardProps> = ({ beer }) => {

    const [cardFlipped, setCardFlipped] = useState(false)

    const style = {
      backgroundImage: `url('${beer.iconUrl}')`,
    }

    return (
      <ReactCardFlip isFlipped={cardFlipped} flipDirection="horizontal">
        <Box className="beer-card"
          onClick={() => setCardFlipped(true)} 
          style={style}>
        </Box>
        <Box className="beer-card flipped" onClick={() => setCardFlipped(false)}>
          <div className="content">
            <Typography variant={"h4"} className="name">
                { beer.name }
            </Typography>
            <Typography variant={"subtitle1"} className="style">
                    { beer.style } { beer.abv }%
                </Typography>
            <Typography variant={"body1"} className="description">
                { beer.description }
            </Typography>
          </div>
        </Box>
      </ReactCardFlip>
    );

};

export default BeerDetailsCard;