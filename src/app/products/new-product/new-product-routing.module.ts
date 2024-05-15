import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';

const routes: Routes = [
  {
    path: '',
    component: NewProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProductRoutingModule {}
