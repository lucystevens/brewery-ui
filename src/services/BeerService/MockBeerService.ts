import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Beer from '../../models/Beer';
import BeerStyle from '../../models/BeerStyle';
import { TeamMember } from '../../models/TeamMember';

const mockBeers: Beer[] = [
    {
        id: 1,
        slug: "kiwi-killer",
        name: "Kiwi Killer",
        abv: 5.0,
        logoUrl: "/images/beers/logos/kiwi-killer.jpg",
        description: "Kiwi Pale Ale",
        style: BeerStyle.PALE_ALE,
        tags: ["fruited", "pale ale", "kiwi"]
    },
    {
        id: 2,
        slug: "rye-do",
        name: "Rye Do",
        abv: 4.2,
        logoUrl: "/images/beers/logos/rye-do.png",
        description: "Spiced Rye Wedding Beer",
        style: BeerStyle.IPA,
        tags: ["rye", "ipa", "wedding beer"]
    },
    {
        id: 3,
        slug: "boston-bruiser",
        name: "Boston Bruiser",
        abv: 6.6,
        logoUrl: "/images/beers/logos/boston-bruiser.png",
        description: "New England IPA",
        style: BeerStyle.NEIPA,
        tags: ["neipa", "hazy", "hoppy", "ipa"]
    },
    {
        id: 4,
        slug: "seeing-double",
        name: "Seeing Double",
        abv: 7.2,
        logoUrl: "/images/beers/logos/seeing-double.jpg",
        coverImageUrl: "/images/beers/seeing-double/cover.jpg",
        description: "Hazy DDH DIPA",
        style: BeerStyle.NEIPA,
        tags: ["neipa", "hazy", "hoppy", "ipa", "dipa"]
    },
    {
        id: 5,
        slug: "berried-treasure",
        name: "Berried Treasure",
        abv: 5.3,
        logoUrl: "/images/beers/logos/berried-treasure.png",
        description: "Mixed Berry Sour",
        style: BeerStyle.SOUR,
        tags: ["sour", "raspberry", "strawberry", "blackberry", "fruited"]
    },
    {
        id: 6,
        slug: "mieterinnen",
        name: "Mieter*innen",
        abv: 4.8,
        logoUrl: "/images/beers/logos/mieterinnen.png",
        coverImageUrl: "/images/beers/mieterinnen/cover.jpg",
        description: "Crisp Helles Lager",
        style: BeerStyle.LAGER,
        tags: ["helles", "crisp", "lager", "german"],
        isAvailable: true,
        price: 3.00
    },
    {
        id: 7,
        slug: "lost-in-the-sauce",
        name: "Lost in the Sauce",
        abv: 6.8,
        logoUrl: "/images/beers/logos/lost-in-the-sauce.png",
        description: "Juicy New England IPA",
        style: BeerStyle.NEIPA,
        tags: ["neipa", "hazy", "hoppy", "ipa", "juicy"],
        isAvailable: true,
        price: 3.00
    }
]

const mockTeam: TeamMember[] = [
    {
        name: "Luke Stevens",
        role: "Head Brewer",
        profileImg: "/images/team/luke-stevens.png",
        text: ""
    },
    {
        name: "Lizzie Stevens",
        role: "Head of Marketing",
        profileImg: "/images/team/lizzie-stevens.png",
        text: ""
    },
    {
        name: "Kieran Newton",
        role: "Assistant Brewer",
        profileImg: "/images/team/kieran-newton.png",
        text: ""
    }
]

export const setupBeerServiceMock = () => {
  const mock = new MockAdapter(axios);
  mock.onGet(`/api/beer/latest-releases`).reply(200, { success: true, data: mockBeers.filter(beer => beer.coverImageUrl) });
  mock.onGet(`/api/beer`, { params: { code: "valid" } }).reply(200, { success: true, data: mockBeers });
  mock.onGet(`/api/beer`, { params: { code: "invalid" } }).reply(200, { success: true, data: mockBeers.filter(beer => !beer.isAvailable) });
  mock.onGet(`/api/beer`, { params: { code: "" } }).reply(200, { success: true, data: mockBeers.filter(beer => !beer.isAvailable) });
  mock.onGet(`/api/team`).reply(200, { success: true, data: mockTeam });
  return mock;
};