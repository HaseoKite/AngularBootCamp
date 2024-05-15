import { NgModule } from '@angular/core';

import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NewProductRoutingModule } from './new-product-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgIf, NgTemplateOutlet } from '@angular/common';
@NgModule({
  declarations: [NewProductFormComponent],
  imports: [
    NewProductRoutingModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    NgTemplateOutlet,
    NgIf
  ]
})
export class NewProductModule {}
