import { Component, Input } from '@angular/core';
import { PricesT } from '../../app-data/products/product.type';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss'
})
export class PricesComponent {
  @Input()
  prices!: PricesT;

  @Input()
  discount?: number;

  discountedPrice(realPrice: number, discount: number): number {
    return realPrice - (realPrice * discount) / 100;
  }
}
