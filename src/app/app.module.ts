import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simple/simple.component';
import { SlugComponent } from './components/slug/slug.component';
import { SlugsComponent } from './components/slugs/slugs.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    SlugComponent,
    SlugsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
