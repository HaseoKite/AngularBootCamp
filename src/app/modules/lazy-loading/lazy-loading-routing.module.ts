import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from '../../components/lazy-component/lazy-component.component';

const routes: Routes = [{
  path: "",
  component: LazyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
