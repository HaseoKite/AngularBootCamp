import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListProductsModule } from './products/catalog/list-products.module';

export const routes: Routes = [
  {
    path: 'a',
    loadChildren: () =>
      import('./routing/modules/a/a.module').then((m) => m.AModule)
  },
  {
    path: 'b',
    loadChildren: () =>
      import('./routing/modules/b/b.module').then((m) => m.BModule)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/catalog/list-products-routing.module').then(
        (m) => m.ListProductsRoutingModule
      )
  },
  {
    path: 'add-product',
    loadChildren: () =>
      import('./products/new-product/new-product.module').then(
        (m) => m.NewProductModule
      )
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
