import { combineLatest, map, Observable, Subject } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { ProductT, ProductIdT } from './product.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl: string = 'api/products';

  private productSelectedSubject$$: Subject<ProductT['id']> = new Subject<
    ProductT['id']
  >();

  private productSelected$: Observable<ProductT['id']> =
    this.productSelectedSubject$$.asObservable();

  private http: HttpClient = inject(HttpClient);

  public readonly products$: Observable<Array<ProductT>> = this.http.get<
    Array<ProductT>
  >(this.productsUrl);

  public readonly productsId$: Observable<Array<ProductIdT>> =
    this.products$.pipe(
      map(
        (products: Array<ProductT>): Array<ProductIdT> =>
          products.map(
            (product: ProductT): ProductIdT => ({
              id: product.id,
              title: product.title
            })
          )
      )
    );

  public readonly productDetail$: Observable<ProductT> = combineLatest({
    products: this.products$,
    productSelected: this.productSelected$
  }).pipe(
    map(
      ({
        products,
        productSelected
      }: {
        products: Array<ProductT>;
        productSelected: ProductT['id'];
      }): ProductT => {
        return products.find(
          (product: ProductT): boolean => product.id === productSelected
        ) as ProductT;
      }
    )
  );

  public selectProduct(id: ProductT['id']): void {
    this.productSelectedSubject$$.next(id);
  }
}
