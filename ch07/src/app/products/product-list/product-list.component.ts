import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  selectedProduct: Product | undefined;
  @ViewChild(ProductDetailComponent) productDetail:
    | ProductDetailComponent
    | undefined;

  private productsSub: Subscription | undefined;

  products$: Observable<Product[]> | undefined;

  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.products$ = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    if (this.productDetail) {
      console.log(this.productDetail.product);
    }
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }
}
