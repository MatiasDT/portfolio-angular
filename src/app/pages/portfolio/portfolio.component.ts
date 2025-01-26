import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductsIdx } from '../../interfaces/products.interface';

@Component({
  selector: 'app-portfolio',
  standalone: false,

  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  get products(): ProductsIdx[] {
    return this.productsService.products;
  }

  constructor(private productsService: ProductsService) { }
}
