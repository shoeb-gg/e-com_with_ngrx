import { createReducer, on } from '@ngrx/store';
import {
    CartInterface,
    ProductStateInterface,
} from '../types/productState.interface';
import * as ProductActions from './actions';

export const initialState: ProductStateInterface = {
    isLoading: true,
    products: [],
    error: '',
};

export const initialCartInterface: CartInterface = {
    productCount: [],
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
    on(ProductActions.addToCart, (state, action) => {
        const existing = state.productCount.findIndex((val) => {
            return val.id === action.id;
        });
        // console.log(existing);

        if (existing !== -1) {
            let count = state.productCount[existing].count;
            // console.log(state.productCount[existing]);

            state.productCount[existing] = { id: action.id, count: count + 1 };
            return { ...state };
        } else {
            return {
                productCount: [
                    ...state.productCount,
                    { id: action.id, count: 1 },
                ],
            };
        }
    })
);
