import { Component, OnInit } from '@angular/core';

import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
} from '@angular/material/dialog';
import { CartDialogComponent } from 'src/app/shared/dialog/cart-dialog/cart-dialog.component';

import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AppStateInterface } from 'src/app/types/appStateInterface';

import { ProductsService } from './products.service';
import * as ProductActions from './store/actions';
import { cartSelector } from './store/selectors';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    endpointResult: Observable<any> | undefined;
    public loading: Observable<boolean> | undefined;
    public cart$: Observable<any>;

    constructor(
        private productsService: ProductsService,
        private store: Store<AppStateInterface>,
        private dialog: MatDialog
    ) {
        this.cart$ = this.store.pipe(select(cartSelector));
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
        }, 500);

        this.store.dispatch(ProductActions.getProducts());
        this.showCart();
    }

    addtoCart(event: number) {
        this.store.dispatch(ProductActions.addToCart({ id: event }));
    }

    showCart() {
        const dialogRef = this.dialog.open(CartDialogComponent, {
            width: '55vw',
            height: '80vh',
            autoFocus: false,
            disableClose: false,
            hasBackdrop: true,
            backdropClass: 'backdropBackground',
        });
    }
}
