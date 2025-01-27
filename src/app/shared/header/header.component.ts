import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PageInfo } from '../../interfaces/page-info.interface';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  get pageInfo(): PageInfo {
    return this.pageInfoService.info;
  }

  constructor(
    private router: Router,
    private pageInfoService: PageInfoService
  ) {}

  searchProducts(value: string) {
    if (value.length < 1) {
      this.router.navigate(['']);
    }

    this.router.navigate(['/search', value]);
  }
}
