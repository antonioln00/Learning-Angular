import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Injectable()
export class ProductViewService {

  constructor(private productService: ProductsService) { }

  private product: Product | undefined;

  getProduct(id: number) {
    const products = this.productService.getProducts();
    if (!this.product){
      this.product = products[id]
    }
    return this.product;
  }
}
