import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PageInfo, TeamWorkMember } from '../interfaces/page-info.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {

  info: PageInfo = {};
  loaded: boolean = false;
  teamWork: TeamWorkMember[] = [];
  teamWorkloaded: boolean = false;

  constructor(private http: HttpClient) {
    this.getPageInfo();
  }

  getPageInfo(): void {
    this.http.get<PageInfo>('./assets/data/data-page.json')
    .subscribe((res: PageInfo) => {
      this.info = res;
      this.loaded = true;
    });
  }

  getTeamWork(): void {
    this.http.get<TeamWorkMember[]>('https://portfolio-e1f9d-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((res: TeamWorkMember[]) => {
      this.teamWork = res;
      this.teamWorkloaded = true;
    });
  }
}
