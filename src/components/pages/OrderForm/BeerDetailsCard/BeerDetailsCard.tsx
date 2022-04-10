import React, { useState } from 'react'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import Beer from '../../../../models/Beer';
import './BeerDetailsCard.scss';
import { AddCircleOutlined, RemoveCircleOutlined } from '@material-ui/icons';

export interface BeerDetailsCardProps {
    beer: Beer;
    onChangeQuantity: (quantity: number) => void
}

// Duplicate of component under BeerPage
// TODO centralise code for these
const BeerDetailsCard: React.FC<BeerDetailsCardProps> = ({ beer, onChangeQuantity }) => {

    let [quantity, setQuantity] = useState<number>(0)

    const updateQuantity = (newQuantity: number) => {
      setQuantity(newQuantity)
      onChangeQuantity(newQuantity)
    }

    return (
        <Card className={"card-root"}>
        <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="h2">
              {beer.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {beer.abv}% {beer.description} (330ml)
            </Typography>
            <Typography variant="h5" color="textSecondary">
              £{(beer.price/100).toFixed(2)}
            </Typography>
          <CardActions disableSpacing className="card-actions">
          <IconButton disabled={quantity === 0} onClick={() => updateQuantity(quantity - 1)} aria-label="remove from order">
            <RemoveCircleOutlined/>
          </IconButton>
          <Typography variant={"h3"}>{quantity}</Typography>
          <IconButton disabled={quantity === beer.quantityAvailable} onClick={() => updateQuantity(quantity + 1)} aria-label="add to order">
            <AddCircleOutlined/>
          </IconButton>
        </CardActions>
        </CardContent>
        <CardMedia
            className="card-image"
            image={beer.logoUrl}
            title={beer.name}
          />
      </Card>
    );

};

export default BeerDetailsCard;