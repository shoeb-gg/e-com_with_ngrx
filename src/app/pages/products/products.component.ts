import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from 'src/app/shared/dialog/cart-dialog/cart-dialog.component';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appStateInterface';

import * as ProductActions from './store/actions';
import {
    cartSelector,
    isLoadingSelector,
    productsSelector,
} from './store/selectors';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    endpointResult: Observable<any> | undefined;
    public loading: Observable<boolean> | undefined;
    public products$: Observable<any>;
    public isLoadingSelector$: Observable<any>;
    public cart$: Observable<any>;

    constructor(
        private store: Store<AppStateInterface>,
        private dialog: MatDialog
    ) {
        this.isLoadingSelector$ = this.store.pipe(select(isLoadingSelector));
        this.products$ = this.store.pipe(select(productsSelector));
        this.cart$ = this.store.pipe(select(cartSelector));
    }

    ngOnInit(): void {
        this.store.dispatch(ProductActions.getProducts());
    }

    addtoCart(event: number) {
        this.store.dispatch(ProductActions.addToCart({ id: event }));
    }
    deleteFromCart(event: number) {
        this.store.dispatch(ProductActions.deleteFromCart({ id: event }));
    }
    clearProductFromCart(event: number) {
        this.store.dispatch(
            ProductActions.removeEntireProductFromCart({ id: event })
        );
    }

    showCart() {
        this.dialog.open(CartDialogComponent, {
            width: '55vw',
            height: '80vh',
            autoFocus: false,
            disableClose: false,
            hasBackdrop: true,
            backdropClass: 'backdropBackground',
        });
    }
}
