import axios, { AxiosResponse } from 'axios';
import Beer from "../../models/Beer";
import ServerResponse from '../../models/ServerResponse';
import { TeamMember } from '../../models/TeamMember';

export class BeerService {
    getTeam(): Promise<AxiosResponse<ServerResponse<TeamMember[]>>> {
        return axios.get(`/api/team`);
    }

    getLatestReleases(): Promise<AxiosResponse<ServerResponse<Beer[]>>> {
        return axios.get(`/api/beer/latest-releases`);
    }

    getBeers(authCode: string): Promise<AxiosResponse<ServerResponse<Beer[]>>> {
        return axios.get(`/api/beer`, { params: { code: authCode } });
    }
}