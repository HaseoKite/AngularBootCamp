import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { CapitalizeDirective } from './directives/capitalize.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectivesComponent,
    CapitalizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
