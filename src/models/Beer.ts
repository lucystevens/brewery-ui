interface Beer {
    id: number;
    slug: string;
    name: string;
    iconUrl: string;
    abv: number;
    description: string;
    style: string;
    price: number;
    quantityAvailable: number;
    tags: string[]
    textColour: String
    category: BeerCategory
}

export enum BeerCategory {
    CORE,
    SEASONAL,
    ARCHIVE
}

export default Beer;