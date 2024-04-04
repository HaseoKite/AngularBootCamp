import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleComponent } from './components/simple/simple.component';
import { SlugComponent } from './components/slug/slug.component';
import { SlugsComponent } from './components/slugs/slugs.component';

const routes: Routes = [{
  path: 'simple',
  component: SimpleComponent
},
{
  path: 'lazy',
  loadChildren: () => import('./modules/lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)
},
{
  path: 'slug',
  component: SlugsComponent,
},
{
  path: 'slug/:id',
  component: SlugComponent,
},
{
  path: 'slug/:id/:slug',
  component: SlugComponent,
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
