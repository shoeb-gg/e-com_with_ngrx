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
    @Output() emitId = new EventEmitter<number>();

    badgeCount = 0;

    increaseBadgeCount() {
        this.badgeCount++;
        this.emitId.emit(this.id);
    }
    decreaseBadgeCount() {
        if (this.badgeCount != 0) this.badgeCount--;
    }
}
