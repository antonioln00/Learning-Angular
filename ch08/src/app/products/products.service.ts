import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface ProductDTO {
  id: number;
  title: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  private convertToProduct(product: ProductDTO): Product {
    return {
      id: product.id,
      name: product.title,
      price: product.price,
    };
  }

  getProducts(): Observable<Product[]> {
    const options = {
      headers: new HttpHeaders({ Authorization: 'myAuthToken' }),
    };
    return this.http.get<ProductDTO[]>(this.productsUrl, options).pipe(
      map((products) =>
        products.map((product) => {
          return this.convertToProduct(product);
        })
      )
    );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;

    return this.http
      .get<ProductDTO>(url)
      .pipe(map((product) => this.convertToProduct(product)));
  }

  addProduct(name: string, price: number): Observable<Product> {
    return this.http
      .post<ProductDTO>(this.productsUrl, {
        title: name,
        price: price,
      })
      .pipe(map((product) => this.convertToProduct(product)));
  }

  updateProduct(id: number, price: number): Observable<void> {
    return this.http.patch<void>(`${this.productsUrl}/${id}`, { price });
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.productsUrl}/${id}`);
  }
}
