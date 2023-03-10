import { Component, OnInit } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';

import { ProductsService } from './pages/products/products.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'e-com';

    public loading: Observable<any> | undefined;

    constructor(private productsService: ProductsService) {}

    ngOnInit(): void {
        this.loading = this.productsService.loading$.pipe(delay(0));
    }
}
