import { Component } from '@angular/core';
import { SlugService } from '../../services/slug.service';

@Component({
  selector: 'app-slugs',
  templateUrl: './slugs.component.html',
  styleUrl: './slugs.component.scss'
})
export class SlugsComponent {
  slugs: Map<number, string>;

  constructor(private slugService: SlugService) {
    this.slugs = this.slugService.getSlugs();
  }
}

