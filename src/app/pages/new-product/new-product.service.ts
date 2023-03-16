import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnvService } from 'src/app/env.service';

import { Product } from 'src/app/models/Product';

@Injectable({
    providedIn: 'root',
})
export class NewProductService {
    constructor(private http: HttpClient, private env: EnvService) {}

    apiUrl = this.env.apiUrl;

    createProduct(data: Product) {
        return this.http.post(this.apiUrl + 'Product', data);
    }

    createMultipleProduct(data: Product[]) {
        return this.http.post(this.apiUrl + 'Product/multiple', data);
    }
}
