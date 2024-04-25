import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  productForm: FormGroup<{
    name: FormControl<string>,
    price: FormControl<number | undefined>
  }> | undefined;

  private buildForm() {
    this.productForm = this.builder.nonNullable.group({
      name: this.builder.nonNullable.control(''),
      price: this.builder.nonNullable.control<number |
        undefined>(undefined, {})
    });
  }

  get name() { return this.productForm.controls.name }
  get price() { return this.productForm.controls.price }

  @Output() added = new EventEmitter<Product>();

  constructor(private productsService: ProductsService, private builder: FormBuilder) { }

  createProduct() {
    this.productsService.addProduct(this.name.value, Number(this.
      price.value)).subscribe(product => {
        this.productForm.reset();
        this.added.emit(product);
      });
  }

}
