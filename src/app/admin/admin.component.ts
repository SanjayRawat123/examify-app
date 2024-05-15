import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent {
  isSidebarExpanded: boolean = true;

  onSidebarToggled(isExpanded: boolean) {
    this.isSidebarExpanded = isExpanded;
  }
}
