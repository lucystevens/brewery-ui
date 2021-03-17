import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Beer from '../../models/Beer';

const mockBeers: Beer[] = [
    {
        id: 1,
        slug: "kiwi-killer",
        name: "Kiwi Killer",
        abv: 5.0,
        logoUrl: "/images/beers/logos/kiwi-killer.jpg",
        style: "Kiwi Pale Ale"
    },
    {
        id: 2,
        slug: "rye-do",
        name: "Rye Do",
        abv: 4.2,
        logoUrl: "/images/beers/logos/rye-do.png",
        style: "Spiced Rye Wedding Beer"
    },
    {
        id: 3,
        slug: "boston-bruiser",
        name: "Boston Bruiser",
        abv: 6.6,
        logoUrl: "/images/beers/logos/boston-bruiser.png",
        style: "New England IPA"
    },
    {
        id: 4,
        slug: "seeing-double",
        name: "Seeing Double",
        abv: 7.2,
        logoUrl: "/images/beers/logos/seeing-double.jpg",
        coverImageUrl: "/images/beers/seeing-double/cover.jpg",
        style: "Hazy DDH IPA"
    },
    {
        id: 5,
        slug: "berried-treasure",
        name: "Berried Treasure",
        abv: 5.3,
        logoUrl: "/images/beers/logos/berried-treasure.png",
        style: "Mixed Berry Sour"
    },
    {
        id: 6,
        slug: "mieterinnen",
        name: "Mieter*innen",
        abv: 4.8,
        logoUrl: "/images/beers/logos/mieterinnen.png",
        coverImageUrl: "/images/beers/mieterinnen/cover.jpg",
        style: "Crisp Helles Lager"
    }
]

export const setupBeerServiceMock = () => {
  const mock = new MockAdapter(axios);
  mock.onGet(`/api/beer/latest-releases`).reply(200, { success: true, data: mockBeers.filter(beer => beer.coverImageUrl) });
  mock.onGet(`/api/beer?code=valid`).reply(200, { success: true, data: mockBeers });
  return mock;
};