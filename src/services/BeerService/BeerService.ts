import axios, { AxiosResponse } from 'axios';
import Beer from "../../models/Beer";

export class BeerService {
    getLatestReleases(): Promise<AxiosResponse<Beer[]>> {
        return axios.get(`/api/beer/latest-releases`);
    }
}