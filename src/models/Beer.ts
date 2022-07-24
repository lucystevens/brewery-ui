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
    textColour: string
    category: BeerCategory
}

export enum BeerCategory {
    CORE = "CORE",
    SEASONAL = "SEASONAL",
    ARCHIVE = "ARCHIVE"
}

export default Beer;