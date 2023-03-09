import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    constructor(private productsService: ProductsService) {}
    endpointResult: Observable<any> | undefined;
    public loading: Observable<any> | undefined;

    ngOnInit(): void {
        this.loading = this.productsService.loading$.pipe(
            tap((res) => {
                console.log(res);
            })
        );

        this.productsService.loading$.next(true);
        setTimeout(() => {
            this.endpointResult = this.productsService.getAllProducts().pipe(
                tap(() => {
                    this.productsService.loading$.next(false);
                })
            );
        }, 2000);
    }
}
