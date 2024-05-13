import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../../app-data/products/product.service';
import { ProductT } from '../../app-data/products/product.type';
import { GetPthoUrlService } from '../../services/get-ptho-url.service';

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
    private readonly productsService: ProductsService,
    private readonly getPhotoUrlService: GetPthoUrlService
  ) {}

  public ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.productsService.selectProduct(params['id']);
    });
  }

  getPhoto(photo: string) {
    return this.getPhotoUrlService.getPhotoUrl(photo);
  }

  nextImage(totalImages: number): void {
    this.activeImage += 1;
    this.activeImage %= totalImages;
    console.log(this.activeImage);
  }

  prevImage(totalImages: number): void {
    this.activeImage =
      this.activeImage > 0 ? this.activeImage - 1 : totalImages - 1;
    console.log(this.activeImage);
  }

  currentSlide(index: number): void {
    this.activeImage = index;
  }
}
