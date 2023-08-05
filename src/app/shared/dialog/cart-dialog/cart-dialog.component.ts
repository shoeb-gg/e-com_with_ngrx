import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { AppStateInterface } from 'src/app/types/appStateInterface';
import {
    cartSelector,
    productsSelector,
} from 'src/app/pages/products/store/selectors';

@Component({
    selector: 'app-cart-dialog',
    templateUrl: './cart-dialog.component.html',
    styleUrls: ['./cart-dialog.component.scss'],
})
export class CartDialogComponent implements OnInit, OnDestroy {
    public products$: Subscription;
    public cart$: Observable<any>;
    public products: any;
    public cartProducts: any;
    public detailedCart: any[] = [];

    constructor(private store: Store<AppStateInterface>) {
        this.cart$ = this.store.pipe(select(cartSelector));

        this.products$ = this.store
            .pipe(select(productsSelector))
            .subscribe((res) => {
                this.products = res.products;
            });
    }

    ngOnInit(): void {
        this.cart$.subscribe((res) => {
            this.cartProducts = res;
        });

        this.setupCart();
    }

    setupCart() {
        this.cartProducts.forEach((val: any) => {
            let e = this.products.find((el: any) => el.id === val.id);

            this.detailedCart.push({
                title: e.title,
                count: val.count,
                imgUrl: e.image,
            });
        });
    }

    ngOnDestroy(): void {
        this.products$.unsubscribe();
    }
}
