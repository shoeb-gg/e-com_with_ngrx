import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
export class CartDialogComponent implements OnInit {
    public products$: Observable<any>;
    public cart$: Observable<any>;

    constructor(private store: Store<AppStateInterface>) {
        this.cart$ = this.store.pipe(select(cartSelector));
        this.products$ = this.store.pipe(select(productsSelector));
    }

    ngOnInit(): void {
        this.cart$.subscribe((res) => {
            console.log(res);
        });
    }
}
