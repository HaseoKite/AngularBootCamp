import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const splitted = value
      .split(' ')
      .map(
        (word) =>
          `${word.substring(0, 1).toUpperCase()}${
            word.substring(1).toLowerCase()
          }`
      );
    return splitted.join(' ');
  }
}
