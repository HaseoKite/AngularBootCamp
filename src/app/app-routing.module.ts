import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListProductsModule } from './products/list-products.module';

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
      import('./products/list-products-routing.module').then(
        (m) => m.ListProductsRoutingModule
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
