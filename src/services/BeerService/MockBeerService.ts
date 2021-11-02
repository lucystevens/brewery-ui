import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Beer from '../../models/Beer';
import BeerStyle from '../../models/BeerStyle';
import { TeamMember } from '../../models/TeamMember';

const mockBeers: Beer[] = [
    {
        id: 1,
        slug: "vforvienna",
        name: "V For Vienna",
        abv: 3.8,
        logoUrl: "/images/beers/logos/vforvienna.png",
        description: "Sessionable Vienna Lager",
        style: BeerStyle.LAGER,
        tags: ["vienna", "crisp", "lager", "german", "session"],
        isAvailable: true,
        price: 3.00
    },
    {
        id: 2,
        slug: "cocoa-cannonball",
        name: "Cocoa Cannonball",
        abv: 10.2,
        logoUrl: "/images/beers/logos/cocoa-cannonball.png",
        description: "Boozy Chocolate Porter",
        style: BeerStyle.STOUT,
        tags: ["chocolate", "porter", "stout"],
        isAvailable: true,
        price: 3.00
    },
    {
        id: 3,
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
  mock.onGet(`/api/beer`).reply(200, { success: true, data: mockBeers });
  mock.onGet(`/api/team`).reply(200, { success: true, data: mockTeam });
  return mock;
};