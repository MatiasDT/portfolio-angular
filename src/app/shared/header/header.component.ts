import { Component } from '@angular/core';

import { PageInfoService } from '../../services/page-info.service';
import { PageInfo } from '../../interfaces/page-info';

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

  constructor(private pageInfoService: PageInfoService) {}
}
