import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SidebarCollapseService } from '../ui-services/side-bar-service/sidenar-collapse.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  isSidebarExpanded: boolean = true;

  constructor(private sidebarService: SidebarCollapseService,
    private ngxService: NgxUiLoaderService
  ) {
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
