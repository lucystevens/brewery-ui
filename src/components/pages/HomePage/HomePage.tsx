import React, { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel';
import Beer from '../../../models/Beer';
import BeerService from '../../../services/BeerService';
import { setupBeerServiceMock } from '../../../services/BeerService/MockBeerService';
import CarouselElement from './CarouselElement';


const HomePage: React.FC = () => {

    const [isLoading, setLoading] = useState(true);
    const [beers, setBeers] = useState<Beer[]>([]);

    useEffect(() => {
        setupBeerServiceMock()
        setLoading(true);

        new BeerService()
          .getLatestReleases()
          .then(({ data }) => setBeers(data))
          .catch((e) => console.error(e))
          .finally(() => setLoading(false));
      }, []);

    return (
        <>
        { !isLoading && <Carousel
            autoPlay={false}
            animation={"slide"}
            indicators={true}
            cycleNavigation={true}
            navButtonsAlwaysVisible={true}>
                { beers.map(beer => <CarouselElement beer={beer} key={beer.slug} />) }
            </Carousel> }
        </>
    );

};

export default HomePage;