import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SidebarCollapseService } from '../ui-services/side-bar-service/sidenar-collapse.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent {
  isSidebarExpanded: boolean = true;

  constructor(private sidebarService: SidebarCollapseService) {
  
  }
}
