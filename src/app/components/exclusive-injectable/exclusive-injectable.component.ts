import { Component } from '@angular/core';
import { ExclusiveInjectableService } from '../../services/exclusive-injectable.service';
import { RootInjectableService } from '../../services/root-injectable.service';

@Component({
  selector: 'app-exclusive-injectable',
  templateUrl: './exclusive-injectable.component.html',
  styleUrl: './exclusive-injectable.component.scss',
})
export class ExclusiveInjectableComponent {
  exclusiveText: string;
  persistentData: string;

  constructor(
    exclusiveInjectableService: ExclusiveInjectableService,
    rootInjectableService: RootInjectableService
  ) {
    this.exclusiveText = exclusiveInjectableService.exclusiveText;
    this.persistentData = rootInjectableService.persistentData;
  }
}
