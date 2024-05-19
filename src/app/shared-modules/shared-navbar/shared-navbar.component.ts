import { Component } from '@angular/core';
import { SidebarCollapseService } from 'src/app/ui-services/side-bar-service/sidenar-collapse.service';

@Component({
  selector: 'app-shared-navbar',
  templateUrl: './shared-navbar.component.html',
  styleUrl: './shared-navbar.component.scss',
})
export class SharedNavbarComponent {
  isSidebarExpanded: boolean = true;

  constructor(private sidebarService: SidebarCollapseService) {
    this.sidebarService.isExpanded$.subscribe((isExpanded: boolean) => {
      console.log(isExpanded);
      this.isSidebarExpanded = isExpanded;
    });
  }

  
}
