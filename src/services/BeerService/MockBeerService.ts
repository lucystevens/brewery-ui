import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Beer from '../../models/Beer';

const mockBeers: Beer[] = [
    {
        id: 1,
        slug: "seeing-double",
        name: "Seeing Double",
        abv: 7.2,
        logoUrl: "/images/beers/seeing-double/logo.png",
        coverImageUrl: "/images/beers/seeing-double/cover.jpg",
        tagLine: "Hazy DDH IPA"
    },
    {
        id: 2,
        slug: "mieterinnen",
        name: "Mieter*innen",
        abv: 4.8,
        logoUrl: "/images/beers/mieterinnen/logo.png",
        coverImageUrl: "/images/beers/mieterinnen/cover.jpg",
        tagLine: "Crisp Helles Lager"
    }
]

export const setupBeerServiceMock = () => {
  const mock = new MockAdapter(axios);
  mock.onGet(`/api/beer/latest-releases`).reply(200, { success: true, data: mockBeers });
  return mock;
};