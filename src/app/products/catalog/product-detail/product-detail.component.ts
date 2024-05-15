import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../../../app-data/products/product.service';
import { ProductT } from '../../../app-data/products/product.type';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  activeImage: number = 0;

  protected productDetail$: Observable<ProductT> =
    this.productsService.productDetail$;

  protected readonly loadingLabel: string =
    'Cargando detalles, por favor espere...';

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productsService: ProductsService
  ) {}

  public ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.productsService.selectProduct(params['id']);
    });
  }

  nextImage(totalImages: number): void {
    this.activeImage += 1;
    this.activeImage %= totalImages;
  }

  prevImage(totalImages: number): void {
    this.activeImage =
      this.activeImage > 0 ? this.activeImage - 1 : totalImages - 1;
  }

  currentSlide(index: number): void {
    this.activeImage = index;
  }
}
