import { createReducer, on } from '@ngrx/store';
import { ProductStateInterface } from '../types/productState.interface';
import * as ProductActions from './actions';

export const initialState: ProductStateInterface = {
    isLoading: false,
    products: [],
    error: '',
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
