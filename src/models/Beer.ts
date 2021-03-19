interface Beer {
    id: number;
    slug: string;
    name: string;
    abv: number;
    logoUrl: string;
    coverImageUrl?: string;
    style: string;
    canBuy?: boolean;
}

export default Beer;