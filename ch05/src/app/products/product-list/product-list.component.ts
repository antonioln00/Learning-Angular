import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements AfterViewInit {
  selectedProduct: Product | undefined;
  @ViewChild(ProductDetailComponent) productDetail:
    | ProductDetailComponent
    | undefined;

  products = [
    {
      name: 'Webcam',
      price: 100,
    },
    {
      name: 'Microphone',
      price: 200,
    },
    {
      name: 'Wireless keyboard',
      price: 85,
    },
  ];

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(`after view init${this.productDetail.product}`);
    }
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }
}
