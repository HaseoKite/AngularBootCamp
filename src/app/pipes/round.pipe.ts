import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundPrice'
})
export class RoundPricePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): number {
    const decimals: number = value % 1;

    return decimals == 0
      ? value
      : decimals > 0.5
        ? Math.ceil(value)
        : Math.floor(value) + 0.5;
  }
}
