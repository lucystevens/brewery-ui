import axios, { AxiosResponse } from 'axios';
import { BeerOrderDto, CreatedOrder } from 'models/BeerOrder';
import Beer from "../../models/Beer";
import ServerResponse from '../../models/ServerResponse';
import { TeamMember } from '../../models/TeamMember';

export class BeerService {
    getTeam(): Promise<AxiosResponse<ServerResponse<TeamMember[]>>> {
        return axios.get(`/api/team`);
    }

    getBeers(): Promise<AxiosResponse<ServerResponse<Beer[]>>> {
        return axios.get(`/api/beer`);
    }

    createOrder(order: BeerOrderDto): Promise<AxiosResponse<ServerResponse<CreatedOrder>>> {
        return axios.post('/api/order', order)
    }

}