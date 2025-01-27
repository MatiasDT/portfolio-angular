import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  get loadingProducts(): boolean {
    return this.productsService.loading;
  }

  get filterProducts() {
    return this.productsService.filterProducts;
  }

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productsService.getFilterProducts(params['value']);
    });
  }
}
