import { Component, Inject } from '@angular/core';
import { RootInjectableService } from '../../services/root-injectable.service';

@Component({
  selector: 'app-root-injectable',
  templateUrl: './root-injectable.component.html',
  styleUrl: './root-injectable.component.scss'
})

export class RootInjectableComponent {
  persistentData: string;
  constructor(rootInjectableService: RootInjectableService){
    this.persistentData = rootInjectableService.persistentData;
  }
}
