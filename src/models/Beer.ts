import BeerStyle from "./BeerStyle";

interface Beer {
    id: number;
    slug: string;
    name: string;
    abv: number;
    logoUrl: string;
    coverImageUrl?: string;
    description: string;
    style: BeerStyle;
    isAvailable?: boolean;
    price?: number;
    tags: string[]
}

export default Beer;