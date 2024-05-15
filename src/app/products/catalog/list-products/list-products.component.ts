import { Component } from '@angular/core';
import { ProductsService } from '../../../app-data/products/product.service';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  startWith,
  Subject
} from 'rxjs';
import { ProductT } from '../../../app-data/products/product.type';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {
  protected readonly titleLabel: string = 'Listado de Productos';
  protected readonly contentLabel: string = 'Catalogo';
  protected readonly listTitleLabel: string = 'Productos';
  protected readonly filterLabel: string = 'Buscar producto...';
  protected readonly noProductsLabel: string =
    'Lo sentimos, lo que buscas no lo encontrarás aquí 😔 ¿O lo habrás escrito mal? 🤔';

  protected currentPage: number = 1;
  protected onlyOffers: boolean = false;
  protected filterValue: string = '';

  private products$: Observable<Array<ProductT>> =
    this.productsService.products$;
  private readonly filterSubject$$: Subject<string> = new Subject<string>();
  private readonly filter$: Observable<string> =
    this.filterSubject$$.asObservable();

  private readonly offersOnlySubject$$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private readonly offersOnly$: Observable<boolean> =
    this.offersOnlySubject$$.asObservable();

  protected filteredProducts$: Observable<Array<ProductT>> = combineLatest([
    this.products$,
    this.filter$.pipe(startWith('')),
    this.offersOnly$
  ]).pipe(
    map(
      ([products, filter, offersOnly]: [
        Array<ProductT>,
        string,
        boolean
      ]): Array<ProductT> => {
        filter = filter.toLowerCase();
        return products.filter(
          (product: ProductT): boolean =>
            product.title.toLocaleLowerCase().includes(filter) &&
            (!offersOnly || (offersOnly && product.offerDiscount > 0))
        );
      }
    )
  );

  public constructor(private readonly productsService: ProductsService) {}

  protected filterChangeHandler(event: string): void {
    this.filterSubject$$.next(event);
  }

  protected offersCheckbocChangeHandler(event: boolean) {
    this.offersOnlySubject$$.next(event);
  }
}
