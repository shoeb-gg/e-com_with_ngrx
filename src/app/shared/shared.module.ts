import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CartDialogComponent } from './dialog/cart-dialog/cart-dialog.component';

@NgModule({
    declarations: [NavbarComponent, CartDialogComponent],
    imports: [CommonModule, RouterModule],
    exports: [NavbarComponent],
})
export class SharedModule {}
