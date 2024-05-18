import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { SidebarCollapseService } from 'src/app/ui-services/side-bar-service/sidenar-collapse.service';
import { CoreMenu } from 'src/types/core-menu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SideBarComponent {
  isExpanded: boolean = true;
  isVisible: boolean = true;
  showToggleSidebarIcon: boolean = true;

  constructor(
    private sidebarService: SidebarCollapseService,
    private elementRef: ElementRef
  ) {}

  ngAfterViewInit(): void {
    const sidebar = this.elementRef.nativeElement.querySelector('.sidebar');
    const sidebarOpenBtn = document.querySelector(
      '#sidebar-open'
    ) as HTMLElement;
    const sidebarCloseBtn = document.querySelector(
      '#sidebar-close'
    ) as HTMLElement;
    const sidebarLockBtn = this.elementRef.nativeElement.querySelector(
      '#lock-icon'
    ) as HTMLElement;

    this.sidebarService.init(
      sidebar,
      sidebarOpenBtn,
      sidebarCloseBtn,
      sidebarLockBtn
    );
  }

  menu: CoreMenu[] = [
    {
      id: 'categories',
      title: 'Categories',
      type: 'item',
      icon: 'bi-list-ul',
      url: 'categories',
    },
    {
      id: 'quizzes',
      title: 'Quizzes',
      type: 'item',
      icon: 'bi-question-square',
      url: 'quizzes',
    },
    {
      id: 'profile',
      title: 'Profile',
      type: 'item',
      icon: 'bi-question-square',
      url: 'profile',
    },
  ];
}
