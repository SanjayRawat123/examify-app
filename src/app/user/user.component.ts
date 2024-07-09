import { Component } from '@angular/core';
import { SidebarCollapseService } from '../ui-services/side-bar-service/sidenar-collapse.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  isSidebarExpanded: boolean = true;

  constructor(private sidebarService: SidebarCollapseService) {
    this.sidebarService.isExpanded$.subscribe((isExpanded: boolean) => {
      console.log(isExpanded);
      this.isSidebarExpanded = isExpanded;
    });
  }
}
