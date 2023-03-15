import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NewProductRoutingModule } from './new-product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [AddProductComponent],
    imports: [
        CommonModule,
        NewProductRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
    ],
})
export class NewProductModule {}
