import {
  Component,
  EventEmitter,
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
  @Output() sidebarToggled = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    this.sidebarToggled.emit(this.isExpanded);
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
