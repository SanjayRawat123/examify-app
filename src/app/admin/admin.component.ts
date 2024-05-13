import { Component, ViewChild } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  isSidebarExpanded: boolean = false;

  onSidebarToggled(isExpanded: boolean) {
    this.isSidebarExpanded = isExpanded;
  }
}
