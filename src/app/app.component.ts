import { Component } from '@angular/core';

import { PageInfoService } from './services/page-info.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private pageInfoService: PageInfoService,
    private productsService: ProductsService) {
  }
}
