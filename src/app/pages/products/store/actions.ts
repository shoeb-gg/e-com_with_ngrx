import { createAction, props } from '@ngrx/store';

export const getProducts = createAction('[Products] Get Products');

export const getProductsSucess = createAction(
    '[Products] Get Products success',
    props<{ products: any }>()
);

export const getProductsFailture = createAction(
    '[Products] Get Products failure',
    props<{ error: string }>()
);

export const addToCart = createAction(
    '[Cart] Adding Products to Cart',
    props<{ id: number }>()
);
