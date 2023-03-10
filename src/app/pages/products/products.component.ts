import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';

import { ProductsService } from './products.service';
import * as ProductActions from './store/actions';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    constructor(
        private productsService: ProductsService,
        private store: Store
    ) {}

    endpointResult: Observable<any> | undefined;
    public loading: Observable<any> | undefined;

    ngOnInit(): void {
        this.loading = this.productsService.loading$;

        this.productsService.loading$.next(true);
        setTimeout(() => {
            this.endpointResult = this.productsService.getAllProducts().pipe(
                tap(() => {
                    this.productsService.loading$.next(false);
                })
            );
        }, 2000);

        this.store.dispatch(ProductActions.getProducts());
    }
}
