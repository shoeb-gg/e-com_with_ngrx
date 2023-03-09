import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor(private http: HttpClient) {}

    loading$ = new BehaviorSubject<boolean>(false);

    getAllProducts() {
        return this.http.get('https://dummyjson.com/products');
    }
}
