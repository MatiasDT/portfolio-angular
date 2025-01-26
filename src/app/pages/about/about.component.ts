import { Component } from '@angular/core';

import { TeamWorkMember } from '../../interfaces/page-info';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-about',
  standalone: false,

  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  get teamWork(): TeamWorkMember[] {
    return this.pageInfoService.teamWork;
  }

  get teamWorkLoaded(): boolean {
    return this.pageInfoService.teamWorkloaded;
  }

  constructor(private pageInfoService: PageInfoService) {
    pageInfoService.getTeamWork();
  }
}
