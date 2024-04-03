import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootInjectableRoutingModule } from './root-injectable-routing.module';
import { RootInjectableComponent } from '../../components/root-injectable/root-injectable.component';


@NgModule({
  declarations: [
    RootInjectableComponent
  ],
  imports: [
    CommonModule,
    RootInjectableRoutingModule
  ],
  exports: [
    RootInjectableComponent
  ]
})
export class RootInjectableModule { }
