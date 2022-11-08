interface Retailer {
    id: number;
    name: string;
    address: string;
    area: string;
    links: RetailerLink[]
    iconUrl: string;
}

export interface RetailerLink {
    type: string;
    url: string;
}

export default Retailer;