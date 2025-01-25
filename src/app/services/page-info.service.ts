import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PageInfo } from '../interfaces/page-info';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info: PageInfo = {};
  loaded: boolean = false;

  constructor(private http: HttpClient) { }

  getPageInfo(): void {
    this.http.get<PageInfo>('/assets/data/data-page.json')
    .subscribe((res: PageInfo) => {
      this.loaded = true;
      this.info = res;
    });
  }
}
