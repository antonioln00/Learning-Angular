import { Component, Host, OnInit, Optional } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { favoritesFactory } from '../favorite';
import { ProductViewService } from '../product-view/product-view.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  providers: [
    { provide: ProductsService, useFactory: favoritesFactory(true), deps: [ProductViewService] }
    ]
})
export class FavoritesComponent implements OnInit {
  products: Product[] = [];
  constructor(@Host() @Optional() private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
