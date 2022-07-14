import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ErrorResponse from 'models/ErrorResponse';
import Beer, { BeerCategory } from '../../models/Beer';

const mockBeers: Beer[] = [
    {
        id: 1,
        slug: "mieterinnen",
        name: "Mieter*innen",
        abv: 4.8,
        iconUrl: "https://i.ibb.co/vkJVQjg/mieterinnen-icon.png",
        description: `Roughly translated to English, mieter*innen means ‘the residents of a building’ or ‘tenants’ (can you see where we are going with this). 
        Our 4.5% helles lager takes the best of German and Scottish beer cultures for a crisp, bohemian refreshment, making it the perfect accompaniment to a slice of pizza on the beach. `,
        style: "Helles Lager",
        tags: ["lager", "german", "session"],
        quantityAvailable: 1,
        price: 3.00,
        textColour: "black",
        category: BeerCategory.CORE
    },
    {
        id: 2,
        slug: "cocoa-cannonball",
        name: "Cocoa Cannonball",
        abv: 8,
        iconUrl: "https://i.ibb.co/B67Z8CJ/cocoa-cannonball-icon.png",
        description: `Our festive favourite, Cocoa Canonball is a big, boozy, imperial chocolate porter. 
        Coming in at a hearty 8%, it is certainly a beer to be savoured, preferably in front of a fire with a mince pie to hand.`,
        style: "Chocolate Porter",
        tags: ["chocolate", "porter", "stout"],
        quantityAvailable: 2,
        price: 3.00,
        textColour: "white",
        category: BeerCategory.CORE
    },
    {
        id: 3,
        slug: "lost-in-the-sauce",
        name: "Lost in the Sauce",
        abv: 6.8,
        iconUrl: "https://i.ibb.co/M9PyFxv/lost-in-the-sauce-icon.png",
        description: `At 6.8% we recommend you enjoy this hazy New England IPA juicebomb in your garden, preferably next to a barbecue. 
        Expect a mouthful of stonefruit and citrus, courtesy of its iconic hop trio.`,
        style: "New England IPA",
        tags: ["neipa", "hazy", "hoppy", "ipa", "juicy"],
        quantityAvailable: 0,
        price: 3.00,
        textColour: "black",
        category: BeerCategory.CORE
    },
    {
        id: 4,
        slug: "more-berries-than-sense",
        name: "More Berries Than Sense",
        abv: 5,
        iconUrl: "https://i.ibb.co/MsFRH6C/more-berries-than-sense-icon.png",
        description: `Our 5% quadruple berry smoothie sour. An unholy amount of raspberries, strawberries, blackberries and 
        redcurrants make up this beer, with a generous handful of madagascan vanilla to create a beautiful, silly sour. 
        Described by some as ribena on crack, described by us as delicious. `,
        style: "Berry Sour",
        tags: ["smoothie", "fruity", "sour"],
        quantityAvailable: 0,
        price: 3.00,
        textColour: "black",
        category: BeerCategory.SEASONAL
    },
    {
        id: 5,
        slug: "goat",
        name: "G.O.A.T",
        abv: 7.2,
        iconUrl: "https://i.ibb.co/phxwY12/goat-icon.png",
        description: `A 7.2% dopplebock. It is a strong, malty, German lager, a full-bodied gal, and the perfect antidote for our chilly Scottish nights. 
        The best time to drink this lager is in the early weeks of spring or the final weeks of autumn, when the sun is out and shining but you still need to wrap up in a few layers. `,
        style: "Doppelbock",
        tags: ["malty", "rich", "lager"],
        quantityAvailable: 0,
        price: 3.00,
        textColour: "black",
        category: BeerCategory.SEASONAL
    }
]

const mockError: ErrorResponse = {
    title: 'Something went wrong',
    status: 500,
    type: 'SERVER_ERROR',
    details: []
}


export const setupBeerServiceMock = () => {
  const mock = new MockAdapter(axios);
  mock.onGet(`/api/beer`).reply(200, mockBeers);
  //mock.onGet(`/api/beer`).reply(500, mockError);
  return mock;
};