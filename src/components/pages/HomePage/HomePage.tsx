import React, { useCallback } from 'react'
import Carousel from 'react-material-ui-carousel';
import { useService } from '../../../hooks/ApiHook';
import BeerService from '../../../services/BeerService';
import { setupBeerServiceMock } from '../../../services/BeerService/MockBeerService';
import CarouselElement from './CarouselElement';


const HomePage: React.FC = () => {

    const makeRequest = useCallback(() => {
        setupBeerServiceMock();
        return new BeerService().getLatestReleases();
    }, []);

    const handleError = useCallback((error) => {
        console.error(error)
    }, []);

    const [{ data, isLoading }] = useService(makeRequest, handleError);

    return (
        <>
        { !isLoading && data && <Carousel
            autoPlay={false}
            animation={"slide"}
            indicators={true}
            cycleNavigation={true}
            navButtonsAlwaysVisible={true}>
                { data.map(beer => <CarouselElement beer={beer} key={beer.slug} />) }
            </Carousel> }
        </>
    );

};

export default HomePage;