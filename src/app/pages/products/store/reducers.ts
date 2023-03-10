import { createReducer, on } from '@ngrx/store';
import { ProductStateInterface } from '../types/productState.interface';
import * as ProductActions from './actions';

export const initialState: ProductStateInterface = {
    isLoading: false,
    products: [],
};

export const reducers = createReducer(
    initialState,
    on(ProductActions.getProducts, (state) => ({
        ...state,
        isLoading: true,
    }))
);
