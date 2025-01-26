import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsIdx } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: ProductsIdx[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts(): void {
    this.http.get<ProductsIdx[]>('https://portfolio-e1f9d-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((res: ProductsIdx[]) => {
      this.products = res;
      this.loading = false;
    });
  }
}
