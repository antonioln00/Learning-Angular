import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsModule } from './modules/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  BrowserModule,
  ProductsModule
  ],
  providers: [],
  bootstrap: []
 })
 export class AppModule { }
