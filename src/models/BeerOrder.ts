export interface CreatedOrder {
    id: number
    orderRef: string
    name: string
    createdAt: Date
    orderTotal: number
}

export interface BeerQuantityDto {
    beerId: number
    quantity: number
}

export interface BeerOrderDto {
    beerQuantities: BeerQuantityDto[]
    deliveryOption?: string
    name?: string
    phoneNumber?: string
    address?: string
    notes?: string
}