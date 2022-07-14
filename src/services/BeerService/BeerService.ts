import axios, { AxiosResponse } from 'axios';
import { BeerOrderDto, CreatedOrder } from 'models/BeerOrder';
import Beer from "../../models/Beer";
import ServerResponse from '../../models/ServerResponse';

export class BeerService {

    getBeers(): Promise<AxiosResponse<ServerResponse<Beer[]>>> {
        return axios.get(`/api/beer`);
    }

    createOrder(order: BeerOrderDto): Promise<AxiosResponse<ServerResponse<CreatedOrder>>> {
        return axios.post('/api/order', order)
    }

}