import BeerStyle from "./BeerStyle";

interface Beer {
    id: number;
    slug: string;
    name: string;
    abv: number;
    logoUrl: string;
    description: string;
    style: BeerStyle;
    quantityAvailable: number;
    price?: number;
    tags: string[]
}

export default Beer;