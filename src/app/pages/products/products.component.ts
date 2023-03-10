import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appStateInterface';

import { ProductsService } from './products.service';
import * as ProductActions from './store/actions';
import { isLoadingSelector } from './store/selectors';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    endpointResult: Observable<any> | undefined;
    public loading: Observable<boolean> | undefined;
    public loading$: Observable<boolean>;

    constructor(
        private productsService: ProductsService,
        private store: Store<AppStateInterface>
    ) {
        this.loading$ = this.store.pipe(select(isLoadingSelector));
    }

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
