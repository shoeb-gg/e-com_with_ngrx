import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';

import { StoreModule } from '@ngrx/store';
import { cartReducers, reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/effects';

@NgModule({
    declarations: [ProductComponent, ProductsComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MatCardModule,
        MatIconModule,
        MatBadgeModule,
        MatDialogModule,

        StoreModule.forFeature('products', reducers),
        StoreModule.forFeature('cart', cartReducers),
        EffectsModule.forFeature([ProductsEffects]),
    ],
})
export class ProductsModule {}
