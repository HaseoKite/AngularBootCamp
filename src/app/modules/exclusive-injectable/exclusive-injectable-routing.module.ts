import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExclusiveInjectableComponent } from '../../components/exclusive-injectable/exclusive-injectable.component';

const routes: Routes = [{
  path: '',
  component: ExclusiveInjectableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExclusiveInjectableRouting { }