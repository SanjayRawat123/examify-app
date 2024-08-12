import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SidebarCollapseService } from '../ui-services/side-bar-service/sidenar-collapse.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  isSidebarExpanded: boolean = true;

  constructor(private sidebarService: SidebarCollapseService, private ngxService: NgxUiLoaderService) {
    this.sidebarService.isExpanded$.subscribe((isExpanded: boolean) => {
      console.log(isExpanded);
      this.isSidebarExpanded = isExpanded;
    });
  }
  ngOnInit(): void {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 1000);
  }
}

