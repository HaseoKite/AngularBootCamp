import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListProductsModule } from './modules/list-products/list-products.module';

export const routes: Routes = [
  {
    path: 'a',
    loadChildren: () => import('./modules/a/a.module').then((m) => m.AModule)
  },
  {
    path: 'b',
    loadChildren: () => import('./modules/b/b.module').then((m) => m.BModule)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/list-products/list-products-routing.module').then(
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
