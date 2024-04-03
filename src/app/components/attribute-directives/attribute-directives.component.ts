import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss',
})
export class AttributeDirectivesComponent {
  activeClass: boolean = false;
  activeStyle: boolean = true;

  toggleActive(): void {
    this.activeClass = !this.activeClass;
    this.activeStyle = !this.activeStyle;
  }
}
