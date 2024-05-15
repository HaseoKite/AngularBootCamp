import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NEW_PRODUCT_FORM_LABELS } from '../new-product-form.labels';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {
  NewProductFormGroupT,
  PhotosFormControlT,
  PricesFormGroupT
} from '../new-product-form.type';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { ProductsService } from '../../../app-data/products/product.service';
import { PricesT, ProductT } from '../../../app-data/products/product.type';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrl: './new-product-form.component.scss'
})
export class NewProductFormComponent {
  @ViewChild(MatAccordion, { static: true })
  protected matAccordion!: MatAccordion;

  @ViewChildren(MatExpansionPanel)
  protected matExpansionPanels!: QueryList<MatExpansionPanel>;

  protected label: any = NEW_PRODUCT_FORM_LABELS;

  public constructor(private readonly productsService: ProductsService) {}

  popup: boolean = false;

  //Validators

  private requiredValidator: ValidatorFn = Validators.required;

  private sentenceUrlValidators: Array<ValidatorFn> = [
    Validators.required,
    Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
  ];

  private sentenceTagValidators: Array<ValidatorFn> = [
    Validators.required,
    Validators.pattern(/^[A-Za-z0-9]+$/)
  ];

  private numbersOnlyValidator: ValidatorFn = Validators.pattern(
    /^(0|[0-9]\d*)(\.\d+)?$/
  );

  private percentageValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const value = Number(control.value);
    return value < 100 ? null : { invalidPercentage: true };
  }

  private priceValidator(control: AbstractControl): ValidationErrors | null {
    const value = Number(control.value);
    return value > 0 ? null : { invalidPrice: true };
  }

  uniqueValidator(inputName?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let values: string[] = [];
      const controlsArray = control as FormArray;

      for (let control of controlsArray.controls) {
        let controlFinal =
          inputName != undefined ? control.get(inputName) : control;
        let value = controlFinal?.value;
        if (value) {
          if (
            values.indexOf(value) == -1 &&
            controlFinal?.hasError('duplicated')
          )
            controlFinal?.setErrors(null);
          if (values.indexOf(value) != -1)
            controlFinal?.setErrors({ duplicated: true });
          values.push(value);
        }
      }

      return this.hasDuplicates(values) ? { duplicated: true } : null;
    };
  }

  private hasDuplicates(values: string[]) {
    const noDups = new Set(values);
    return values.length !== noDups.size;
  }

  // Form

  protected newProductForm: NewProductFormGroupT = new FormGroup({
    details: new FormGroup({
      title: new FormControl('', {
        nonNullable: true,
        validators: this.requiredValidator
      }),
      description: new FormControl('', {
        nonNullable: true,
        validators: this.requiredValidator
      })
    }),
    photos: new FormArray(
      [this.getNewPhoto()],
      [Validators.minLength(1), this.uniqueValidator()]
    ),
    prices: new FormArray(
      [this.getNewPrice()],
      [Validators.minLength(1), this.uniqueValidator('tag')]
    ),
    discount: new FormControl(0, {
      nonNullable: true,
      validators: [
        this.requiredValidator,
        this.numbersOnlyValidator,
        this.percentageValidator
      ]
    })
  });

  // Photos
  private getNewPhoto(): PhotosFormControlT {
    return new FormControl('https://', {
      nonNullable: true,
      validators: this.sentenceUrlValidators
    });
  }

  protected addPhoto(): void {
    this.newProductForm.controls.photos.push(this.getNewPhoto());
  }

  protected removePhoto(skillIndex: number): void {
    if (this.newProductForm.controls.photos.length > 1) {
      this.newProductForm.controls.photos.removeAt(skillIndex);
    }
  }

  // Prices

  private getNewPrice(): PricesFormGroupT {
    return new FormGroup({
      tag: new FormControl('', {
        nonNullable: true,
        validators: this.sentenceTagValidators
      }),
      price: new FormControl(0, {
        nonNullable: true,
        validators: [this.priceValidator, this.numbersOnlyValidator]
      })
    });
  }

  protected addPrice(): void {
    this.newProductForm.controls.prices.push(this.getNewPrice());
  }

  protected removePrice(capabilityIndex: number): void {
    if (this.newProductForm.controls.prices.controls.length > 1) {
      this.newProductForm.controls.prices.removeAt(capabilityIndex);
    }
  }

  // Actions

  protected onSubmit(): void {
    this.productsService.addProduct(this.newProductFormToProductT());
    this.newProductForm.reset();
    this.popup = true;
    console.log(this.popup);
  }

  protected hideMessage() {
    this.popup = false;
  }

  newProductFormToProductT(): ProductT {
    let pricesObject: { [tag: string]: number } = {};
    const valueObject: Object = this.newProductForm.value;
    const orderedOject: any = Object.entries(valueObject)
      .map(([k, v]) => [k, v])
      .reduce((a, [k, v]) => ({ ...a, [k]: v }), {});
    const pricesArray = orderedOject.prices;
    pricesArray.forEach((price: { tag: string; price: number }) => {
      pricesObject[price.tag] = price.price;
    });
    const productT: ProductT = {
      id: 0,
      title: orderedOject.details.title,
      description: orderedOject.details.description,
      prices: pricesObject,
      offerDiscount: Number(orderedOject.discount),
      photos: orderedOject.photos
    };
    return productT;
  }
}
