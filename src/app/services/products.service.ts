import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product, ProductsIdx } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading: boolean = true;
  products: ProductsIdx[] = [];
  filterProducts: ProductsIdx[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts(): Promise<void> {

    return new Promise<void>((resolve, reject) => {
      this.http.get<ProductsIdx[]>('https://portfolio-e1f9d-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((res: ProductsIdx[]) => {
        this.products = res;
        this.loading = false;
        resolve();
        });
      });
  }

  getFilterProducts(value: string): void {
    if (this.products.length === 0) {
      this.getProducts().then(() => {
        this.filterProductsByTitle(value);
      });
    } else {
      this.filterProductsByTitle(value);
    }
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`https://portfolio-e1f9d-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  private filterProductsByTitle(value: string): void {
    this.filterProducts = this.products.filter(product => {
      return product.titulo.toLowerCase().includes(value.toLowerCase());
    });
  }
}
