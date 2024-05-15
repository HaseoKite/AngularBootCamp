import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductT } from './products/product.type';
import { ProductData } from './products/product.data';

export class AppData implements InMemoryDbService {
  public createDb(): { products: Array<ProductT> } {
    const products: Array<ProductT> = ProductData.products;

    return { products };
  }
}
