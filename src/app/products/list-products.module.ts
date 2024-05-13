import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductsRoutingModule } from './list-products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RoundPricePipe } from '../pipes/round.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorComponent } from './paginator/paginator.component';
import { PaginateProductsPipe } from '../pipes/paginate-products.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PricesComponent } from './prices/prices.component';

@NgModule({
  declarations: [
    ListProductsComponent,
    RoundPricePipe,
    ProductDetailComponent,
    PaginateProductsPipe,
    PricesComponent
  ],
  imports: [
    CommonModule,
    ListProductsRoutingModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    FormsModule,
    BrowserAnimationsModule,
    PaginatorComponent,
    MatCheckboxModule
  ]
})
export class ListProductsModule {}
