import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { priceRangeValidator } from '../pricerange.directve';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  showPriceRangeHint = false;

  ngOnInit(): void {
    this.price.valueChanges.subscribe(price => {
      if (price) {
        this.showPriceRangeHint = price > 1 && price < 10000;
      }
    })
  }

  productForm = new FormGroup({
    name: new FormControl('',
      {
        nonNullable: true,
        validators: Validators.required
      }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [Validators.required, priceRangeValidator()]
    })
  });


  get name() { return this.productForm.controls.name }
  get price() { return this.productForm.controls.price }

  @Output() added = new EventEmitter<Product>();

  constructor(private productsService: ProductsService) { }

  createProduct() {
    this.productsService.addProduct(this.name.value, Number(this.
      price.value)).subscribe(product => {
        this.productForm.reset();
        this.added.emit(product);
      });
  }

}
