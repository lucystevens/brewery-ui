import React from 'react'
import { Box, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import Beer from '../../../../models/Beer';
import './CarouselElement.scss'

interface CarouselElementProps {
    beer: Beer
}

const CarouselElement: React.FC<CarouselElementProps> = ({ beer }) => {

    const history = useHistory();

    const handleOnClick = () => {
        history.push(`/beers/${beer.slug}`)
      }

    const styles = {
        backgroundImage: `url('${beer.coverImageUrl}')`
    }

    return (
        <Box style={styles} className={"root-img-bg"}>
            <Box className={"container"} display={"flex"}>
                <Typography variant={"h1"} className={"text name"}>{beer.name}</Typography>
                <Typography variant={"h3"} className={"text tag-line"}>{beer.style}</Typography>
                <Button className={"button"} variant="outlined" onClick={handleOnClick}>Check it out</Button>
            </Box>
        </Box>
    );

};

export default CarouselElement;