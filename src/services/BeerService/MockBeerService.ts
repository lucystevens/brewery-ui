import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Beer from '../../models/Beer';

const mockBeers: Beer[] = [{
    id: 1,
    slug: "mieterinnen",
    name: "Mieter*innen",
    abv: 4.8,
    logoUrl: "/images/beers/mieterinnen/logo.png",
    coverImageUrl: "/images/beers/mieterinnen/cover.png",
    tagLine: "Crisp Helles Lager"
}]

export const setupBeerServiceMock = () => {
  const mock = new MockAdapter(axios);
  mock.onGet(`/api/beer/latest-releases`).reply(200, mockBeers);
  return mock;
};