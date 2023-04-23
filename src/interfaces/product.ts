export interface IProductRequest{
    name: string;
    price: number;
    description: string;
}

export interface IUpdateProductRequest{
    name?: string;
    price?: number;
    description?: string;
}

export interface IProductResponse{
    id: string;
    name: string;
    price: number;
    description: string;
}

