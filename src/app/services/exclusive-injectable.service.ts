import { Injectable } from '@angular/core';
import { ExclusiveInjectableModule } from '../modules/exclusive-injectable/exclusive-injectable.module';

@Injectable({
  providedIn: ExclusiveInjectableModule
})
export class ExclusiveInjectableService {

  constructor() { }

  exclusiveText: string = "I'm an exclusive injectable";
}
