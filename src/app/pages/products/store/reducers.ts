import { createReducer, on } from '@ngrx/store';
import {
    CartInterface,
    ProductStateInterface,
} from '../types/productState.interface';
import * as ProductActions from './actions';

export const initialState: ProductStateInterface = {
    isLoading: false,
    products: [],
    error: '',
};

export const initialCartInterface: CartInterface = {
    productId: [],
};

export const reducers = createReducer(
    initialState,
    on(ProductActions.getProducts, (state) => ({
        ...state,
        isLoading: true,
    })),

    on(ProductActions.getProductsSucess, (state, action) => ({
        ...state,
        isLoading: false,
        products: action.products,
    })),

    on(ProductActions.getProductsFailture, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    }))
);

export const cartReducers = createReducer(
    initialCartInterface,
    on(ProductActions.addToCart, (state, action) => ({
        ...state,
        productId: [...state.productId, action.id],
    }))
);
