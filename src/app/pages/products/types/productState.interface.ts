export interface ProductStateInterface {
    isLoading: boolean;
    products: any;
    error: string;
}

export interface CartInterface {
    productId: number[];
}
