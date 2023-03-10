import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ProductsService } from '../products.service';
import * as ProductActions from './actions';

@Injectable()
export class ProductsEffects {
    getProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductActions.getProducts),
            mergeMap(() => {
                return this.productService.getAllProducts().pipe(
                    map((products) =>
                        ProductActions.getProductsSucess({ products })
                    ),
                    catchError((error) =>
                        of(
                            ProductActions.getProductsFailture({
                                error: error.message,
                            })
                        )
                    )
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private productService: ProductsService
    ) {}
}
