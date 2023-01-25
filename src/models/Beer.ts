interface Beer {
    id: number;
    name: string;
    iconUrl: string;
    abv: number;
    description: string;
    style: string;
    core: boolean;
    untappdLink?: string;
    hidden?: boolean
}

export default Beer;