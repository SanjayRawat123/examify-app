import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CoreMenu } from 'src/types/core-menu';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SideBarComponent {
  isExpanded: boolean = true;
  isHoverable: boolean = false;
  @Output() sidebarToggled = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    this.sidebarToggled.emit(this.isExpanded);
    setTimeout(() => {
      if (!this.isExpanded) {
        console.log("hello hover ")
        this.isHoverable = true;
      }
    }, 1000);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isHoverable = window.innerWidth >= 768;
    if (!this.isHoverable) {
      this.isExpanded = false; // Collapse sidebar on small screens
    }
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
