import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { NewProductService } from '../new-product.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
    constructor(
        private fb: FormBuilder,
        private newProductService: NewProductService
    ) {}

    public profileForm: FormGroup;

    public productArray: Product[] = [];

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.profileForm = this.fb.group({
            Name: ['', Validators.required],
            Brand: ['', Validators.required],
            Description: ['', Validators.required],
            Price: [0, Validators.required],
            ImageUrl: ['', Validators.required],
        });
    }

    createProduct() {
        this.newProductService
            .createProduct(this.profileForm.value)
            .subscribe((res) => {
                console.log(res);
            });
    }

    createMultipleProduct() {
        this.newProductService
            .createMultipleProduct(this.productArray)
            .subscribe((res) => {
                console.log(res);
            });
    }
}
