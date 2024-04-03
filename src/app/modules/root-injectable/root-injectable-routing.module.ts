import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootInjectableComponent } from '../../components/root-injectable/root-injectable.component';

const routes: Routes = [{
  path: 'child',
  component: RootInjectableComponent,
  outlet: 'child'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootInjectableRoutingModule { }
