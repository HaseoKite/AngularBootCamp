import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  oneWay: string = "Hello World";
  twoWay: string = "";
  popup: boolean = false;
  toggleMessage(): void{
    this.popup = !this.popup;
  }
}
