import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';

@NgModule({
    declarations: [ProductComponent, ProductsComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MatCardModule,
        MatIconModule,
        MatBadgeModule,
        StoreModule.forFeature('products', reducers),
    ],
})
export class ProductsModule {}
