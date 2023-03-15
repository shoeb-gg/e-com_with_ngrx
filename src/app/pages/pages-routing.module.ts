import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'products',
        loadChildren: () =>
            import('./products/products.module').then((m) => m.ProductsModule),
    },
    {
        path: 'new',
        loadChildren: () =>
            import('./new-product/new-product.module').then(
                (m) => m.NewProductModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
