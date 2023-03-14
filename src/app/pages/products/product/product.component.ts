import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
    @Input() id: number = 0;
    @Input() title: String = '';
    @Input() brand: String = '';
    @Input() thumbnail: String = '';
    @Input() description: String = '';
    @Input() price: Number = 0;
    @Output() addId = new EventEmitter<number>();
    @Output() removeId = new EventEmitter<number>();
    @Output() clearFromCartId = new EventEmitter<number>();

    badgeCount = 0;

    increaseBadgeCount() {
        this.badgeCount++;
        this.addId.emit(this.id);
    }
    decreaseBadgeCount() {
        if (this.badgeCount != 0) {
            this.removeId.emit(this.id);
            this.badgeCount--;
        }
    }

    clearProductFromCart() {
        this.badgeCount = 0;
        this.clearFromCartId.emit(this.id);
    }
}
