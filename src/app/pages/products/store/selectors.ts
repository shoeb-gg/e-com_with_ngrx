import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appStateInterface';

export const selectFeature = (state: AppStateInterface) => state.products;
export const selectCartFeature = (state: AppStateInterface) => state.cart;

export const isLoadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading
);
export const productsSelector = createSelector(
    selectFeature,
    (state) => state.products
);
export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error
);

export const cartSelector = createSelector(
    selectCartFeature,
    (state) => state.productId
);
