import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExclusiveInjectableModule } from './modules/exclusive-injectable/exclusive-injectable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExclusiveInjectableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
