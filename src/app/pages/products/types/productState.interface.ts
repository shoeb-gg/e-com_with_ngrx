export interface ProductStateInterface {
    isLoading: boolean;
    products: any;
    error: string;
}

export interface CartInterface {
    productCount: productId[];
}

interface productId {
    id: number;
    count: number;
}
