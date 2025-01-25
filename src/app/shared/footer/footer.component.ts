import { Component } from '@angular/core';

import { PageInfo } from '../../interfaces/page-info';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year: number = new Date().getFullYear();

  get pageInfo(): PageInfo {
    return this.pageInfoService.info;
  }

  constructor(private pageInfoService: PageInfoService) {}
}
