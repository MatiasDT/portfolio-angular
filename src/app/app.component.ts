import { Component } from '@angular/core';

import { PageInfoService } from './services/page-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private pageInfoService: PageInfoService) {
    pageInfoService.getPageInfo();
  }
}
