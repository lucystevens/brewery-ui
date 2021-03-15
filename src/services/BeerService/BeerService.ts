import axios, { AxiosResponse } from 'axios';
import Beer from "../../models/Beer";
import ServerResponse from '../../models/ServerResponse';

export class BeerService {
    getLatestReleases(): Promise<AxiosResponse<ServerResponse<Beer[]>>> {
        return axios.get(`/api/beer/latest-releases`);
    }

    getBeers(): Promise<AxiosResponse<ServerResponse<Beer[]>>> {
        return axios.get(`/api/beer`);
    }
}