import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './modules/products/products.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
  ProductsModule
  ],
  providers: [],
  bootstrap: []
 })
 export class AppModule { }
