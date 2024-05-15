import {
  TitleT,
  PhotoT,
  DescriptionT,
  PriceT,
  DiscountT
} from '../../entities/newProductForm.type';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';

export type ProductDetailsFormGroupT = FormGroup<{
  title: FormControl<TitleT>;
  description: FormControl<DescriptionT>;
}>;

export type PhotosFormControlT = FormControl<PhotoT>;

export type PricesFormGroupT = FormGroup<{
  tag: FormControl<PriceT['tag']>;
  price: FormControl<PriceT['price']>;
}>;

export type DiscountFormControlT = FormControl<DiscountT>;

export type NewProductFormGroupT = FormGroup<{
  details: ProductDetailsFormGroupT;
  photos: FormArray<PhotosFormControlT>;
  prices: FormArray<PricesFormGroupT>;
  discount: DiscountFormControlT;
}>;
