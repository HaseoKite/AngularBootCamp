import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExclusiveInjectableComponent } from '../../components/exclusive-injectable/exclusive-injectable.component';
import { ExclusiveInjectableService } from '../../services/exclusive-injectable.service';
import { ExclusiveInjectableRouting } from './exclusive-injectable-routing.module';
import { RootInjectableModule } from '../root-injectable/root-injectable.module';


@NgModule({
  declarations: [
    ExclusiveInjectableComponent
  ],
  imports: [
    CommonModule,
    ExclusiveInjectableRouting,
    RootInjectableModule
  ],
  providers: [ExclusiveInjectableService]
})
export class ExclusiveInjectableModule { }
