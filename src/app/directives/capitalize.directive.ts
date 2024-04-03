import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]',
})
export class CapitalizeDirective {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.capitalizeText();
  }

  capitalizeText(): void {
    let txtContent: string = this.elementRef.nativeElement.innerText;
    this.elementRef.nativeElement.innerText =
      txtContent.substring(0, 1).toUpperCase() +
      txtContent.substring(1).toLowerCase();
  }
}
