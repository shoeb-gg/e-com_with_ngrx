import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
    @Input() title: String = '';
    @Input() brand: String = '';
    @Input() thumbnail: String = '';
    @Input() description: String = '';
    @Input() price: Number = 0;

    badgeCount = 0;

    increaseBadgeCount() {
        this.badgeCount++;
    }
    decreaseBadgeCount() {
        if (this.badgeCount != 0) this.badgeCount--;
    }
}
