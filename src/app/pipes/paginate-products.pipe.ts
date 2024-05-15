import { Pipe, PipeTransform } from '@angular/core';
import { ProductT } from '../app-data/products/product.type';
import { PaginationConst } from '../../constants/pagination-constants';

@Pipe({
  name: 'paginateProducts'
})
export class PaginateProductsPipe implements PipeTransform {
  transform(products: ProductT[], currentPage: number): ProductT[] {
    const productsPerPage: number = PaginationConst.productsPerPage;
    const firstIndex: number = (currentPage - 1) * productsPerPage;
    const lastIndex: number = firstIndex + productsPerPage;
    return products.slice(firstIndex, lastIndex);
  }
}
