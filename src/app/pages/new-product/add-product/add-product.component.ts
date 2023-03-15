import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
    constructor(private fb: FormBuilder) {}

    public profileForm: FormGroup;
    public value: any;

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.profileForm = this.fb.group({
            name: [''],
            brand: [''],
            description: [''],
            price: [''],
            imgUrl: [
                'https://w0.peakpx.com/wallpaper/495/863/HD-wallpaper-random-awesome-blue-games-nerds-red.jpg',
            ],
        });
    }
}
