import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlugService {
  private slugs: Map<number, string> = new Map([
    [ 1, 'Slug #1' ],
    [ 2, 'Second Slug'],
    [ 3, 'Slug Three']
  ]);

  getSlug(id: number): string{
    return this.slugs.get(+id) ?? 'Not Found';
  }
  getSlugs() {
    return this.slugs;
  }

  constructor() { 
  }
}
