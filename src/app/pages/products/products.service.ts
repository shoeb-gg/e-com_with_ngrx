import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from 'src/app/env.service';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor(private http: HttpClient, private env: EnvService) {}

    apiUrl = this.env.apiUrl;

    getAllProducts() {
        return this.http.get(this.apiUrl + 'products');
    }
}
