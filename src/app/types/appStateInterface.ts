import {
    CartInterface,
    ProductStateInterface,
} from '../pages/products/types/productState.interface';

export interface AppStateInterface {
    products: ProductStateInterface;
    cart: CartInterface;
}
